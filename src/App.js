import { useReducer, useEffect } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskDisplay from './components/TaskDisplay';
import { listReducer } from './data/tasksSlice';
import ClearTasks from './components/ClearTasks';
import './App.css';

function App() {

  // retrieves tasks from localStorage and sets to a variable 'storedTasks'
  const storedTasks = localStorage.getItem('tasks'); 
  
  // sets the initialState to the storedTasks if exists or an empty array if not
  const initialState = { 
    tasks: storedTasks ? JSON.parse(storedTasks) : []
  }

  // useReducer allows us to manage the state of tasks with actions in the listReducer
  const [state, dispatch] = useReducer(listReducer, initialState); 
  const { tasks } = state; 

  useEffect(() => { // runs everytime tasks is updated and saves it to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  console.log(tasks);

  return (
    <div className="App">

      {/* Header & Input */}
      <div className='header-container'>
        <Header />
        <AddTask dispatch={dispatch} />
        {tasks.length === 0 ? <p className='text-success'>All tasks completed!</p> : <ClearTasks dispatch={dispatch} />}
      </div>

      {/* Task List */}
      <div className='list-container'>
        <ul className='list-group list-group-flush col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4' >
          {/* Iterates through the tasks from initialState and maps them into the view list */}
          {tasks.map((task) => {
            return (
              <TaskDisplay
                key={task.id}
                task={task}
                completed={task.completed}
                dispatch={dispatch}
              />
            );
          })}
        </ul> 
      </div>
    </div>
  );
}

export default App;
