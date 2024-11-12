import TaskDisplay from './TaskDisplay'; // import the TaskDisplay component to render list items below

// use array.map to render list of tasks 
// renders each list item per TaskDisplay
const TaskList = () => {
    const tasks = [
        "Task 1",
        "Task 2",
        "Task 3"
    ]; // will eventually be a dynamic list that is changed with user input

    if (tasks) {
        return (
            <div className='tasks-container m-4'>
                {tasks.map((task, index) => (
                    <TaskDisplay key={index} task={task} />
                ))}
            </div>
        );
    };

    // FIX THIS RETURN STATEMENT
    return <p>Add some tasks to get started!</p>; // should return if there are no tasks in the array (NOT WORKING???)
};

export default TaskList; // exports the TaskList component as the default