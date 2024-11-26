export const validateTaskForm = (values) => {
    const errors = {};

    // Task Validation
    if (!values.newTask) {
        errors.newTask = 'Enter a task';
    } 
    else if (values.newTask.length > 35) {
        errors.newTask = 'Must be 35 characters or less';
    }
    // TODO - check if task already exists

    return errors; 
};