import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'


function App() {
  const router = createBrowserRouter([
    {
      path:"/login",
      element:<><Navbar/><Signup/></>
    },
    {
      path:"/",
      element:<><Navbar/><Home/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
