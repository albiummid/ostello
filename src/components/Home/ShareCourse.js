import React from 'react'
export default function ShareCourse() {
  return (
    <>
      <div className='shareBG flex lg:justify-between lg:items-center flex-col justify-center gap-10 lg:flex-row '>
        <div className='text-white w-[50%] lg:ml-60 mx-auto hidden font-medium lg:block'>
          <h1 className='text-white  text-5xl mb-5'>Share this course and</h1>
          <h1 className='text-white text-5xl'>receive exciting offers.</h1>
        </div>
        <h1 className='text-white font-medium text-center lg:ml-20 text-3xl lg:hidden'>
          Share this course and receive exciting offers
        </h1>
        <button className='px-8 py-4 text-xl lg:text-2xl w-fit mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-medium active:opacity-80'>
          Sign up and Refer
        </button>
      </div>
    </>
  )
}
