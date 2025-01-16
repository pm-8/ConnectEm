import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import connectEmLogo from "../assets/connectem-logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <Link to="/">
          <img src={connectEmLogo} alt="ConnectEm Logo" className="h-15 w-12 mr-1 ml-0 pl-0" />
        </Link>
        <span className="text-2xl font-bold">ConnectEm</span>
      </div>
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <>
          <Link to = "/profile">
            <span className="text-white px-4 py-2 rounded">{username}</span>
          </Link>  
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
