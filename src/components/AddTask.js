import { useState } from 'react';

const AddTask = ({ dispatch }) => {

    const [inputValue, updateInput] = useState(''); // tracks the state for the new task to be added

    // tracks user input as it is entered or changed
    const handleChange = (event) => {
        // event is onChange - target is the text input box - value is user input
        updateInput(event.target.value); 
    };

    // dispatches to App.js upon submission of the new task
    const handleSubmit = (event) => {
        event.preventDefault(); // prevents the webpage from reloading upon submit
        dispatch({ type: 'ADD_TASK', payload: inputValue }); // creates a new object to pass into the listReducer on App.js that includes the type of 'ADD_TASK' and the new user input
        updateInput(''); // resets the new task ready for additional user input
    };

    return (

        <form onSubmit={handleSubmit}>

            {/* Task Input */}
            <input type='text' value={inputValue} onChange={handleChange} placeholder='What is your next task?' />
            <button type='submit' color='warning'>Add</button>
        </form>

    )
};



export default AddTask;
