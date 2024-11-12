import React, { useState } from 'react';

const TaskForm = () => {
    return (
        <form className='todo-form m-4'>
            <div className='input-group xs-6'>
                <input 
                    type='text' 
                    className='task-input form-control' 
                    placeholder='What is your next task?' />
                <button 
                    type='submit' 
                    className='submit-btn btn btn-info' >Add</button>
            </div>
        </form>
    );
};

export default TaskForm;