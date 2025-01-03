import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      localStorage.setItem("Username",data.username);
      localStorage.setItem("Gender",data.gender);
      localStorage.setItem("fullName",data.fullName)
      localStorage.setItem("Role",data.role);
      localStorage.setItem("isLoggedIn",true);
      if (response.ok) {
        toast.success("User Logged-In");
        login(data.username);
        navigate("/profile");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (err) {
      console.log("Submission failed", err);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-darkBlue">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-darkBlue">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-darkBlue text-black py-2 rounded-md hover:bg-blue-700 hover:text-white transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
