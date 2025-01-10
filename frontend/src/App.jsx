import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Hero  from './components/Hero';

function App() {
  const router = createBrowserRouter([
    {
      path:"/signup",
      element : <><Navbar/><Signup state = {false} /></>
    },
    {
      path:"/login",
      element:<><Navbar/><Signup state = {true}  /></>
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
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
