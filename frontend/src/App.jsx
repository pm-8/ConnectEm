import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar'
<<<<<<< HEAD
import Signup from './components/Signup'
import Hero  from './components/Hero';
=======
// import Signup from './components/Signup'
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

>>>>>>> 5ca8e75b2846eccc1b69e86bb119dc190675bf92

function App() {
  const router = createBrowserRouter([
    {
      path:"/signup",
<<<<<<< HEAD
      element : <><Navbar/><Signup state = {false} /></>
    },
    {
      path:"/login",
      element:<><Navbar/><Signup state = {true}  /></>
=======
      element:<><Navbar/><SignupForm/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
>>>>>>> 5ca8e75b2846eccc1b69e86bb119dc190675bf92
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
