import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import LoginPage from './components/LoginPage'


function App() {
  const router = createBrowserRouter([
    {
      path:"/login",
      element:<><Navbar/><LoginPage/></>
    },
    {
      path:"/",
      element:<><Navbar/><Home/></>
    }
  ]);

  return (
    <>

    </>
  )
}

export default App
