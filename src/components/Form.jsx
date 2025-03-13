import React from "react";

const Form = () => {
    return (
        <div className="popup-overlay">
            <form className="form">
                <div className="form-header">
                    <h2>Add New Task</h2>
                    <h2>X</h2>
                </div>
                <label htmlFor="task-name">Task Name:</label>
                <input
                    type="text"
                    id="task-name"
                    placeholder="Enter task name..."
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Descriptions..."
                />
                <label htmlFor="priority-level">Select Priority Level:</label>
                <select id="priority-level">
                    <option value="" disabled selected>
                        Select Priority level
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label htmlFor="due-date">Due Date</label>
                <input type="date" />
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
