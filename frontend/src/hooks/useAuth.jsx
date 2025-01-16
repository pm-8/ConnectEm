import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    console.log("kicked in");
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log("kicking profile.js");
                const response = await fetch("http://localhost:3000/profile", {
                    method: "GET",
                    credentials: "include", // Include cookies in the request
                });
                console.log(`response is ${response}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data); // Log the response data
                setUser(data);
            } catch (err) {
                console.error("Error fetching user data:", err);
                setError("Failed to fetch user data");
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    return { user, loading, error };
};

export default useAuth;
