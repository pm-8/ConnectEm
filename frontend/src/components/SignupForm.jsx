import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [username, setFirstName] = useState('');
  const [fullname, setLastName] = useState('');
  const [gender,setGender] = useState('Male');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  async function register(ev){
    ev.preventDefault();// prevents default form submissions
    try{
      const response = await fetch('http://localhost:3000/auth/register',{
        method : "POST",
        body : JSON.stringify({username,fullname,gender,email,password,role}),
        headers : {'Content-Type':'application/json'}        
      })
      // localStorage.setItem("isRegistered",true);
      const data = await response.json()
      console.log(data);
      if(response.ok)
      navigate("/login");
    }
    catch(err){
      console.log('Regsitration Failed. Coder Chutiya hai')
    }
  }
  return (
    <form className="space-y-6" method = "POST" onSubmit={register}>
      <div className="flex gap-4">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-darkBlue"
          >
            Username
          </label>
          <input
            type="text"
            id="firstName"
            value = {username}
            onChange={ev => setFirstName(ev.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Username"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-darkBlue"
          >
            Full Name
          </label>
          <input
            type="text"
            id="lastName"
            value = {fullname}
            onChange = {ev => setLastName(ev.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Full Name"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-darkBlue"
        >
          Gender
        </label>
        <select
          id="gender"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={ev => setGender(ev.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-darkBlue"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value = {email}
          onChange={ev => setEmail(ev.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-darkBlue"
        >
          Password
        </label>
        <input
          type="Password"
          id="password"
          value = {password}
          onChange = {ev => setPassword(ev.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Create a Password"
        />
      </div>
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-darkBlue"
        >
          Role
        </label>
        <select
          id="role"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={ev => setRole(ev.target.value)}
        >
          <option value="mentor">Mentor</option>
          <option value="mentee">Mentee</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-darkBlue text-blue-950 py-2 rounded-md hover:bg-blue-700 hover:text-white transition"
      >
        Signup
      </button>
      <Link to="/login">
      <button
            className="text-sm text-blue-600 underline hover:text-blue-800"
      >
            Already Registered? Login

      </button>
      </Link>
      
    </form>
  );
};

export default SignupForm;
