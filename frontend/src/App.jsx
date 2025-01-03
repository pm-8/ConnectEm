import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar'
// import Signup from './components/Signup'
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';


function App() {
  const router = createBrowserRouter([
    {
      path:"/signup",
      element:<><Navbar/><SignupForm/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/profile",
      element:<><Navbar/><ProfilePage/></>
    }
  ]);

  return (
    <>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
