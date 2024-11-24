import { Button } from 'reactstrap';

// Display format for each task in the list
const TaskDisplay = ({ task, dispatch }) => {

    return (
        <li className='input-group task-item list-group-item'>
            
            <input class='form-check-input me-1' type='checkbox' value='' id={task.id}Checkbox />
            <label class='form-check-label' for={task.id}Checkbox >{task.name}</label>
            
            {/* onClick dispatches object to the listReducer on App.js, passing in the task to be removed */}
            <Button type='button' color='white' className='btn-outline-danger position-absolute top-0 end-0' onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task })}>X</Button>
        </li>
    );
};

export default TaskDisplay; // exports the TaskDisplay component as the default