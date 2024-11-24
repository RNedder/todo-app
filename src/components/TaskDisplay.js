import { useState } from 'react';
import { Button } from 'reactstrap';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaRegStar, FaStar } from 'react-icons/fa';


// TODO - add 'checked' or 'completed' property to task objects and toggle checkbox through that instead of by the buttons

// Display format for each task in the list
const TaskDisplay = ({ task, dispatch }) => {

    // useState for the checkboxes
    const [ checked, setChecked ] = useState(false);
    // called when the checkbox button is clicked and toggles if checked depending on current state
    const toggleCheckbox = () => {
        if (checked === false) {
            setChecked(true);
        } else {
            setChecked(false); // sets false if already checked
        }
    };

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
            
            <div className='btn-toolbar justify-content-between' role='toolbar'>
                <div className='btn-group mr-2' role='group'>
                    {/* Custom Checkbox Button using SVGs */}
                    {/* Toggles onClick between checkbox SVGs */}
                    <Button onClick={toggleCheckbox} 
                        type='button' 
                        color='outline-secondary' 
                        className='' 
                        id={task.id}Checkbox> 
                    { checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
                    </Button>

                    {/* Custom Star Button using SVGs */}
                    <Button onClick={toggleStar} 
                        type='button' 
                        color='outline-warning' 
                        className='' 
                        id={task.id}Checkbox> 
                    { starred ? <FaStar /> : <FaRegStar /> }
                    </Button>

                </div>

                <div className='input-group'>
                {/* Label for checkbox - AKA the task */}
                <label class='task-label mr-2 form-check-label' for={task.id}Checkbox >{task.name}</label>
                </div>

                <div className='btn-group' role='group'>
                    {/* Button for removal of tasks */}
                    {/* onClick dispatches object to the listReducer on App.js, passing in the task to be removed */}
                    <Button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task })}
                        type='button' 
                        color='outline-danger' 
                        className=''>
                        <MdOutlineDeleteForever /></Button>
                </div>

            </div>
        </li>
    );
};

export default TaskDisplay; // exports the TaskDisplay component as the default