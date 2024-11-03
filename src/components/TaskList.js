import TaskDisplay from './TaskDisplay'; // import the TaskDisplay component to render list items below

const tasks = [
    'task 1',
    'task 2',
    'task 3',
    'task 4',
    'task 5'
]; // will eventually be a dynamic list that is changed with user input

// use array.map to render list of tasks 
// renders each list item per TaskDisplay
const TaskList = () => {
    return (
        <div className='tasks-container'>
            {tasks.map((task, index) => (
                <TaskDisplay key={index} task={task} />
            ))}
        </div>
    );
};

export default TaskList; // exports the TaskList component as the default