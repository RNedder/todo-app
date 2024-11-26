import { useReducer } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskDisplay from './components/TaskDisplay';
import { TASKS } from './data/TASKS';
import { listReducer } from './data/tasksSlice';
import './App.css';

// initialState object of the todo list - contains an empty array imported from data/TASKS
const initialState = { 
  tasks: TASKS
};

function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const { tasks } = state;

  return (
    <div className="App">

      {/* Header & Input */}
      <div className='header-container'>
        <Header />
        <AddTask dispatch={dispatch} />
        {/* Test Button for removing completed items <button onClick={() => dispatch({ type: 'REMOVE_COMPLETED' })}>Remove Completed</button> */} 
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
