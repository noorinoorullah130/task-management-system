import React, { useRef, useState, useEffect } from "react";

const Form = ({ setShowForm, isEditing, setIsEditing, editingTask }) => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priorityLevel, setPriorityLevel] = useState("low");
    const [date, setDate] = useState("");

    const dateInput = useRef(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        if ((isEditing, editingTask)) {
            setName(editingTask.name);
            setDescription(editingTask.description);
            setPriorityLevel(editingTask.priorityLevel);
            setDate(editingTask.date);
            console.log(editingTask);
        }
    }, [isEditing, editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing && editingTask) {
            const updatedTasks = tasks.map((task) =>
                task.id === editingTask.id
                    ? { ...task, name, description, priorityLevel, date }
                    : task
            );

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            setTasks(updatedTasks);
            console.log(updatedTasks);
        } else {
            const newTask = {
                id: new Date().getTime(),
                name,
                description,
                priorityLevel,
                date,
            };

            const updatedTasks = [...tasks, newTask];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            console.log(updatedTasks);
            setTasks(updatedTasks);
        }

        setName("");
        setDescription("");
        setPriorityLevel("low");
        setDate("");

        setShowForm(false);
        setIsEditing(false);
    };

    const handleShowCalender = () => {
        dateInput.current.showPicker();
    };

    return (
        <div className="popup-overlay">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>Add New Task</h2>
                    <h2 onClick={() => setShowForm(false)}>X</h2>
                </div>
                <label htmlFor="task-name">Task Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="task-name"
                    placeholder="Enter task name..."
                    required
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    placeholder="Descriptions..."
                    required
                />
                <label htmlFor="priority-level">Select Priority Level:</label>
                <select
                    id="priority-level"
                    value={priorityLevel}
                    onChange={(e) => setPriorityLevel(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <label htmlFor="due-date">Due Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    ref={dateInput}
                    onClick={handleShowCalender}
                    required
                />
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
