export const validateTaskForm = (values) => {
    const errors = {};

    // Task Validation
    if (!values.newTask) {
        errors.newTask = 'Enter a task';
    };

    return errors; 
};