import React from 'react'
import {NavLink , Link} from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';
import useHello from '../hooks/useHello';
function Home() {
    
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <img src = "https://kidscodecs.com/wp-content/uploads/2020/02/History_TS_ProgrammingMemes_image4.png" className='m-auto'></img>
    </div>
  )
}

export default Home
