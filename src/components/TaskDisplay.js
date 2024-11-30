import { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { FaRegStar, FaStar } from 'react-icons/fa';

// Display format for each task in the list
const TaskDisplay = ({ task, dispatch }) => {



    // useState for the stars
    const [ starred, setStarred ] = useState(false);
    // called when the star button is clicked and toggles if starred
    const toggleStar = () => {
        if (starred === false) {
            setStarred(true);
        } else {
            setStarred(false);
        }
    }

    return (
        <li className='task-item list-group-item'>
            
            <Container>
            <Row className='btn-toolbar justify-content-between' role='toolbar'>
                <Col xs='2' className='btn-group align-items-center' role='group'>
                    {/* Custom Checkbox Button using SVGs */}
                    {/* Toggles onClick between checkbox SVGs */}
                    {/* <input type='checkbox' onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id })}></input> */}
                    <Button  
                        onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id })}
                        type='button' 
                        color='outline-secondary' 
                        className='check-button' 
                        id={task.id}Checkbox> 
                    { task.completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
                    </Button>

                    {/* Custom Star Button using SVGs */}
                    <Button onClick={toggleStar} 
                        type='button' 
                        color='outline-warning' 
                        className='star-button' 
                        id={task.id}Star> 
                    { starred ? <FaStar /> : <FaRegStar /> }
                    </Button>

                </Col>

                <Col className='input-group'>
                {/* Label for checkbox - AKA the task */}
                <label class='task-label form-check-label' for={task.id}Checkbox >{task.name}</label>
                </Col>

                <Col xs='2' sm='1' className='btn-group align-items-center' role='group'>
                    {/* Button for removal of tasks */}
                    {/* onClick dispatches object to the listReducer on App.js, passing in the task to be removed */}
                    <Button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
                        type='button' 
                        color='outline-danger' 
                        className='delete-button'>
                        <MdOutlineDeleteForever /></Button>
                </Col>

            </Row>
            </Container>
        </li>
    );
};

export default TaskDisplay; // exports the TaskDisplay component as the default