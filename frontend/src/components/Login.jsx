import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  async function login(ev) {
    ev.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (response.ok) {
            navigate("/profile");
        } else {
            const errorData = await response.json();
            alert(errorData.error || "Login failed");
        }
    } catch (err) {
        console.log("Submission failed", err);
    }
}

  return (
    <form className="space-y-6" onSubmit={login}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-darkBlue"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value = {username}
          onChange = {ev => setUsername(ev.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-darkBlue"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
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
