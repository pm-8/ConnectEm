import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'
function Layout() {
    const [Login , setLogin] = useState(true);
  return (
    <div>
        
        {Login ? <Outlet/> : <Home/>}
    </div>
  )
}

export default Layout
