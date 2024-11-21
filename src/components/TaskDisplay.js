// Display format for each task in the list
const TaskDisplay = ({ task, dispatch }) => {
    return (
        <li className='task-item list-group-item'>
            <input class='form-check-input me-1' type='checkbox' value='' id={task.id}Checkbox />
            <label class='form-check-label' for={task.id}Checkbox >{task.name}</label>
        </li>
    );
};

export default TaskDisplay; // exports the TaskDisplay component as the default