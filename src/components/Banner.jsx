import React from "react";

const Banner = ({ setShowForm }) => {
    return (
        <div className="banner">
            <h1>Manage Tasks</h1>
            <button onClick={() => setShowForm(true)}>Add New Task</button>
        </div>
    );
};

export default Banner;
