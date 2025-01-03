import React from "react";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { isCookie } from "react-router-dom";
const ProfilePage = () => {
    const[username,setUsername] = useState(localStorage.getItem("Username"));
    const[fullName,setfullName] = useState(localStorage.getItem("fullName"));
    const[gender,setGender] = useState(localStorage.getItem("Gender"));
    const[Role,setRole] = useState(localStorage.getItem("Role"));
    // console.log(user);

    return (
        <div>
            <h2>👤 Profile</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Full Name:</strong> {fullName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Role:</strong> {Role}</p>
        </div>
    );
};

export default ProfilePage;
