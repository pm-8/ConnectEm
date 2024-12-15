import React, { useState } from "react";
import Login from "./Login";
import SignupForm from "./SignupForm";

const Signup = ({state}) => {
  const [isLogin, setIsLogin] = useState(state);
  
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gradient-to-b from-blue-50 to-blue-200 text-darkBlue">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center text-darkBlue mb-6">
          {isLogin ? "Login" : "Signup"}
        </h1>
        {isLogin ? <Login /> : <SignupForm />}
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
