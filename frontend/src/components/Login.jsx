import React from "react";

const Login = () => {
  return (
    <form className="space-y-6">
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
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
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
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-darkBlue text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
