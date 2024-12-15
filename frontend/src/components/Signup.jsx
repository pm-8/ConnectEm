import React, { useState } from "react";

const Signup = ({state}) => {
  const [isLogin, setIsLogin] = useState(state);
  
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gradient-to-b from-blue-50 to-blue-200 text-darkBlue">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-darkBlue mb-6">
          {isLogin ? "Login" : "Signup"}
        </h1>
        {isLogin ? (
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
        ) : (
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-darkBlue"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-darkBlue"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Last Name"
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
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
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
              >
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-darkBlue text-blue-950 py-2 rounded-md hover:bg-blue-700 hover:text-white transition "
            >
              Signup
            </button>
          </form>
        )}
        <div className="text-center mt-4">
          <button
            className="text-sm text-blue-600 underline hover:text-blue-800"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Signup"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
