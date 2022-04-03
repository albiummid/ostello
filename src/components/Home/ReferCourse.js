import React from 'react'
export default function ReferCourse() {
  return (
    <>
      <div className='shareBG flex lg:justify-between lg:items-center flex-col justify-center gap-10 lg:flex-row '>
        <h1 className='text-white font-medium  text-2xl lg:text-5xl lg:w-[30ch] lg:mx-auto text-center lg:text-left '>
          Refer someone you know and receive exciting offers
        </h1>
        <button
          className='px-6 py-2
        lg:py-3 text-lg lg:text-2xl w-fit mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-semibold active:opacity-80'
        >
          Sign up and Refer
        </button>
      </div>
    </>
  )
}
