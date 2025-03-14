import React, { useEffect, useState } from "react";

const TasksList = ({ showForm, setShowForm, setIsEditing, setEditingTask }) => {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        const updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setAllTasks(updatedTasks);
        console.log(updatedTasks);
    }, [showForm]);

    const handleEdit = (task) => {
        setIsEditing(true);
        setShowForm(true);
        setEditingTask(task);
        console.log(task);
    };

    const handleDelete = (index) => {
        const updatedTasks = allTasks.filter((_, i) => index !== i);
        setAllTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    return (
        <div className="main-content">
            {allTasks.length < 1 ? (
                <div className="empty-tasks">No tasks available.</div>
            ) : (
                allTasks.map((task, i) => (
                    <div className="task" key={i}>
                        <h2 className="title">{task.name}</h2>
                        <p className="description">{task.description}</p>
                        <div className="meta">
                            <h3 className="priority-level high">
                                {task.priorityLevel}
                            </h3>
                            <h3 className="due-date">Due: {task.date}</h3>
                        </div>
                        <div className="action-btns">
                            <button
                                className="edit-btn"
                                onClick={() => handleEdit(task)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(i)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TasksList;
