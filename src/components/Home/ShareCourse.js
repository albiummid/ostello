import React from 'react'
export default function ShareCourse() {
  return (
    <>
      <div className='shareBG flex lg:justify-between lg:items-center flex-col justify-center gap-10 lg:flex-row '>
        <div className='text-white w-[50%] lg:text-3xl text-2xl mx-auto hidden lg:block'>
          <h1 className='text-white'>Share this course and</h1>
          <h1 className='text-white'>receive exciting offers.</h1>
        </div>
        <h1 className='text-white text-center text-xl lg:hidden'>
          Share this course and receive exciting offers
        </h1>
        <button className='px-6 py-2 text-lg w-fit mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-bold active:opacity-80'>
          Sign up and Refer
        </button>
      </div>
    </>
  )
}
