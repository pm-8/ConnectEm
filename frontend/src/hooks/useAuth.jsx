import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = setUser(null);
    const [loading, setLoading] = setLoading(true);
    const [error, setError] = setError("");
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if(!token){
                    navigate("/login");
                    return; //try commenting this
                }
                const response = await axios.get("http://localhost:3000/profile",{
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                });
                setUser(response.data);
            }
            catch(err){
                console.error("Error fetching user data:",err);
                setError("Failed to fetch user data");
            } finally{
                setLoading(false);
            }
        } 
    },[navigate]); // why is this used
    return {user,loading,error};
}

export default useAuth;