import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    console.log("kicked in");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                axios.defaults.withCredentials = true;

                const response = await axios.get("http://localhost:3000/profile");
                setUser(response.data);
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
