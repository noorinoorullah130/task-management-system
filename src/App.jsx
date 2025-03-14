import Form from "./components/Form";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TasksList from "./components/TasksList";
import { useState } from "react";

function App() {
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingTask, setEditingTask] = useState({});

    return (
        <>
            <Header />
            <Banner setShowForm={setShowForm} />
            <TasksList
                showForm={showForm}
                setShowForm={setShowForm}
                setIsEditing={setIsEditing}
                setEditingTask={setEditingTask}
            />
            {showForm && (
                <Form
                    setShowForm={setShowForm}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    editingTask={editingTask}
                />
            )}
        </>
    );
}

export default App;
