import { useReducer, useEffect } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskDisplay from './components/TaskDisplay';
import { listReducer } from './data/tasksSlice';
import ClearTasks from './components/ClearTasks';
import './App.css';

function App() {

  const storedTasks = localStorage.getItem('tasks'); // retrieves tasks from localStorage and sets to a variable 'storedTasks'
  
  const initialState = { // sets the initialState to the storedTasks if exists or an empty array if not
    tasks: storedTasks ? JSON.parse(storedTasks) : []
  }

  const [state, dispatch] = useReducer(listReducer, initialState); // useReducer allows us to manage the state of tasks with actions in the listReducer
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
        {tasks.length === 0 ? <h4 className='text-success'>All tasks completed!</h4> : <ClearTasks dispatch={dispatch} />}
      </div>

      <div className='options-container '>
      
      </div>

      {/* Task List */}
      <div className='list-container'>
        <ul className='list-group list-group-flush col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3' >
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
