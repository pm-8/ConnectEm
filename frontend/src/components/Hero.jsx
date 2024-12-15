import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Home from './Home';
function Hero() {
  const [isLogin , setLogin] = useState(false);
  return (
    <>
      {isLogin 
      ? <>
          <Outlet/>
        </> 
        : 
        <>
          <Home/>
        </>}
    </>
  )
}

export default Hero
