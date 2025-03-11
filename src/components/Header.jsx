import React from "react";
import profilePic from "../assets/profile.jpg";

const Header = () => {
    return (
        <div className="header">
            <h1>Task Management</h1>
            <input type="text" placeholder="Search by task name..." />
            <img src={profilePic} />
        </div>
    );
};

export default Header;
