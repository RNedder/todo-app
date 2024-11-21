import { useReducer } from 'react';
import { v4 as uuid } from 'uuid'; 
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskDisplay from './components/TaskDisplay';
import './App.css';

// initialState object of the todo list - contains an empty array for task objects to be added to
const initialState = { 
  tasks: [
    { id: uuid(), name: 'do laundry'}, // test object - REMOVE LATER
    { id: uuid(), name: 'cook dinner'}
  ]
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
