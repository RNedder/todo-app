import { useReducer } from 'react';
import { v4 as uuid } from 'uuid'; 
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskDisplay from './components/TaskDisplay';
import { TASKS } from './data/TASKS';
import { ImCheckboxUnchecked } from 'react-icons/im';
import './App.css';

// initialState object of the todo list - contains an empty array imported from data/TASKS
const initialState = { 
  tasks: TASKS
};

// listReducer manages changes to the list 
// Takes the current state and action and returning the new state
const listReducer = (state, action) => {
  console.log(action);

  // switch takes the action type and performs the corresponding update to the list
  switch (action.type) { 
    case 'ADD_TASK':
      return {
        ...state, // spreads the current state
        tasks: state.tasks.concat([
          { id: uuid(), name: action.payload } // add unique identifier for id so the order can change later
        ])
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter( // filters the array for all tasks that do NOT match the removed item
          (task) => task.id !== action.payload.id
        )
      }

    // TO DO: add 'REMOVE_TASK' case
    default:
      return state;

  }
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
      </div>

      {/* Task List */}
      <div className='list-container'>
        <ul className='list-group list-group-flush col-8 col-md-6 col-lg-4 offset-2 offset-md-3 offset-lg-4' >
          {/* Iterates through the tasks from initialState and maps them into the view list */}
          {tasks.map((task) => {
            return (
              <TaskDisplay
                key={task.id}
                task={task}
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
