import { v4 as uuid } from 'uuid'; 
// listReducer manages changes to the list 
// Takes the current state and action and returning the new state

// initialState object of the todo list - contains an empty array that is parsed from localStorage
/* export const initialState = { 
  tasks: []
};
 */


export const listReducer = (state, action) => {
  
    // switch takes the action type and performs the corresponding update to the list
    switch (action.type) { 
      case 'ADD_TASK':
        return {
          ...state, // spreads the current state
          tasks: state.tasks.concat([
            { id: uuid(), name: action.payload, completed: false, starred: false } // add unique identifier for id so the order can change later
          ])
        };
  
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter( // filters the array for all tasks that do NOT match the removed item
            (task) => task.id !== action.payload
          )
        }

      case 'TOGGLE_COMPLETE': // maps through the array and changes the completed property to the opposite of it's current boolean state ONLY if the id matches
        return {
          ...state,
          tasks: state.tasks.map((task) => task.id === action.payload ? {...task, completed: !task.completed} : task)
      }

      case 'TOGGLE_STARRED': // maps through the array and changes the starred property to the opposite of it's current boolean state ONLY if the id matches
        return {
          ...state,
          tasks: state.tasks.map((task) => task.id === action.payload ? {...task, starred: !task.starred} : task)
        }

      case 'REMOVE_COMPLETED': // filters the array for all tasks that have a completed property of 'false'
        return {
          ...state,
          tasks: state.tasks.filter( 
            (task) => !task.completed
          )
        }

      case 'REMOVE_ALL_TASKS': // returns only tasks without a name property - which will be no tasks
        return {
          ...state,
          tasks: state.tasks.filter(
            (task) => !task.name
          )
        }

      default:
        return state;
  
    }
  };