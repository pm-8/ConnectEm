import React from 'react'
import {NavLink , Link} from 'react-router-dom';

import CourseCard from './Courses/CourseCard';
function Home() {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center flex-col'>
          <div className=' text-[100px]'> Home Page</div>
          <CourseCard/>
      </div>
    </>
  )
}

export default Home
