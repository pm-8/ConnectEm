import React from "react";
import useAuth from "../hooks/useAuth";

const ProfilePage = () => {
    const { user, loading, error } = useAuth();
    console.log(user);
    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;

    return (
        <div>
            <h2>👤 Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Full Name:</strong> {user.fullName || "N/A"}</p>
        </div>
    );
};

export default ProfilePage;
