import React from 'react'
import Container from '../Layout/Container'

export default function ShareCourse() {
  return (
    <>
      <div className='shareBG flex justify-between items-center max-w-7xl mx-auto '>
        <div className='text-white w-[50%] text-3xl mx-auto flex-col '>
          <h1 className=''>Share this course and</h1>
          <h1>receive exciting offers.</h1>
        </div>
        <button className='px-6 py-2 text-sm w-fit mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-bold active:opacity-80'>
          Sign up and Refer
        </button>
      </div>
    </>
  )
}
