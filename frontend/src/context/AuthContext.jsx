// src/context/AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("isLoggedIn"));
  const [username, setUsername] = useState(localStorage.getItem("Username") || "");

  const login = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("Username", username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
