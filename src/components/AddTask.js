import { useState } from 'react';
import { Button } from 'reactstrap';

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

        <form className='input-group d-flex justify-content-center' onSubmit={handleSubmit}> {/* onSubmit when 'submit' button is clicked */}

            {/* Task Input */}
            <input type='text' value={inputValue} alt='add a task' onChange={handleChange} placeholder='What is your next task?' />
            {/* 'Add' button only appears when an inputValue is registered */}
            {inputValue && <Button type='submit' color='outline-success'>Add</Button>} 
        </form>

    )
};



export default AddTask;
