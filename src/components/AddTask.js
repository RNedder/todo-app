import { useState } from 'react';
import { Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateTaskForm } from '../utils/validateTaskForm';

const AddTask = ({ dispatch }) => {

    // OBSOLETE
    // const [inputValue, updateInput] = useState(''); // tracks the state for the new task to be added

    // OBSOLETE with Formik 
/*     // tracks user input as it is entered or changed
    const handleChange = (event) => {
        // event is onChange - target is the text input box - value is user input
        updateInput(event.target.value); 
    }; */

    // dispatches to App.js upon submission of the new task
    const handleSubmit = (values, { resetForm }) => {
        const newTask = values.newTask;
        dispatch({ type: 'ADD_TASK', payload: newTask }); // creates a new object to pass into the listReducer on App.js that includes the type of 'ADD_TASK' and the new user input
        resetForm(); // resets form after submission
    };

    return (

        <Formik 
            initialValues={{
                newTask: ''
            }}
            onSubmit={handleSubmit}
            validate={validateTaskForm}>
                <Form>
                    <Field id='newTask' name='newTask' placeholder='What is your next task?' className='form-control'/>
                    <ErrorMessage name='newTask'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                    <Button type='submit' color='outline-success'>Add</Button>
                </Form>
        </Formik>
    )
};



export default AddTask;
