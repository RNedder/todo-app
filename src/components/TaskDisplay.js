import { useState } from 'react';
import { Button } from 'reactstrap';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { RiDeleteBin2Fill } from "react-icons/ri";


// TODO - add 'checked' or 'completed' property to task objects and toggle checkbox through that instead of by the buttons

// Display format for each task in the list
const TaskDisplay = ({ task, dispatch }) => {

    // useState for the checkboxes
    const [ checked, setChecked ] = useState(false);
    // called when the checkbox button is clicked and toggles if checked depending on current state
    const toggleCheckbox = () => {
        if (checked === false) {
            setChecked(true);
            console.log(checked);
        } else {
            setChecked(false); // sets false if already checked
            console.log(checked);
        }
    };

const checkbox = checked ? '<ImCheckboxChecked />' : '<ImCheckboxUnchecked />';

    return (
        <li className='position-relative input-group task-item list-group-item'>
            
            {/* Custom Checkbox Button using SVGs */}
            {/* Toggles onClick between checkbox SVGs */}
            <Button onClick={toggleCheckbox} 
                type='button' 
                color='white' 
                className='list-button btn btn-outline-secondary position-absolute top-0 start-0' 
                id={task.id}Checkbox> 
            { checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
            </Button>

            {/* Label for checkbox - AKA the task */}
            <label class='task-label form-check-label' for={task.id}Checkbox >{task.name}</label>
            
            {/* Button for removal of tasks */}
            {/* onClick dispatches object to the listReducer on App.js, passing in the task to be removed */}
            <Button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task })}
                type='button' 
                color='white' 
                className='list-button btn btn-outline-danger position-absolute top-0 end-0'>
                <RiDeleteBin2Fill /></Button>
        </li>
    );
};

export default TaskDisplay; // exports the TaskDisplay component as the default