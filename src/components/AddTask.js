import { Button, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateTaskForm } from '../utils/validateTaskForm';

const AddTask = ({ dispatch }) => {

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
            validate={validateTaskForm}
            >
                <Form>
                    <FormGroup className='btn-group'>
                    <Field id='newTask' name='newTask' placeholder='What is your next task?' className='task-form form-control mx-auto'/>
                    <Button type='submit' color='outline-success'>Add</Button>
                    </FormGroup>
                    <ErrorMessage name='newTask'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Form>

        </Formik>


    )
};



export default AddTask;
