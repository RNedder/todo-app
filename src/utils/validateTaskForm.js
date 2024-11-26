export const validateTaskForm = (values) => {
    const errors = {};

    // Task Validation
    if (!values.newTask) {
        errors.newTask = 'Enter a task';
    } else if (values.newTask.length > 100) {
        errors.newTask = 'Must be 100 characters or less';
    }
    // TODO - check if task already exists

    return errors; 
};