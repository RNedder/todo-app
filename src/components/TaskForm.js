import { Col, Button, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateTaskForm } from '../utils/validateTaskForm';

const TaskForm = () => {

    const handleSubmit = (values, {resetForm }) => {
        console.log('New Task:', values);
        console.log('in JSON Format:', JSON.stringify(values));
        resetForm(); // reset the form once it has been submitted
        
    }

    return (
        <Formik 
            initialValues={{
                newTask: ''
            }}
            onSubmit={handleSubmit}
            validate={validateTaskForm}
        >
            <Form>
                {/* Task Input */}
                <FormGroup>
                    <Label htmlFor='newTask'>New Task:</Label>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Field 
                            name='newTask'
                            placeholder='What is your next task?'
                            className='form-control'
                        />
                        <ErrorMessage name='newTask'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> 
                    </Col>
                </FormGroup>

                {/* Submit Button */}
                <FormGroup>
                    <Col md={{ size: 2, offset: 5 }}>
                        <Button type='submit' color='warning' >
                            Add
                        </Button>
                    </Col>
                </FormGroup>

            </Form>

        </Formik>


    )
};



export default TaskForm;
