// Display format for each task in the list
const TaskDisplay = ({ task, dispatch }) => {
    return (
        <li className='task-item'>{task.name}</li>
    );
};

export default TaskDisplay; // exports the TaskDisplay component as the default