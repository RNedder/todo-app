import { v4 as uuid } from 'uuid'; 
// listReducer manages changes to the list 
// Takes the current state and action and returning the new state
export const listReducer = (state, action) => {
  
    // switch takes the action type and performs the corresponding update to the list
    switch (action.type) { 
      case 'ADD_TASK':
        return {
          ...state, // spreads the current state
          tasks: state.tasks.concat([
            { id: uuid(), name: action.payload, completed: true } // add unique identifier for id so the order can change later
          ])
        };
  
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter( // filters the array for all tasks that do NOT match the removed item
            (task) => task.id !== action.payload.id
          )
        }

      case 'TOGGLE_COMPLETE': 
        return {
        // Logic to toggle the completed property between 'true' and 'false'
      }

      case 'REMOVE_COMPLETED': 
        return {
          ...state,
          tasks: state.tasks.filter( // filters the array for all tasks that have a completed property of 'false'
            (task) => !task.completed
          )
        }

      // TO DO: add 'CLEAR_COMPLETED_TASKS' case
      default:
        return state;
  
    }
  };