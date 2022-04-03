import React from 'react'
import Container from '../Layout/Container'

export default function OfferSection() {
  return (
    <div>
      <Container>
        <div className='offerBG p-3 text-white py-10 flex flex-col justify-around '>
          <div className='md:text-5xl text-xl font-medium'>
            <h1 className=' text-white  text-center lg:my-4'>
              Register early to get
            </h1>
            <h1 className=' text-white  text-center'>
              Rs. 1000 worth of coupons
            </h1>
          </div>
          <div className=' ring-2 lg:ring-4 ring-white w-fit mx-auto  rounded-xl my-8 lg:py-12 lg:px-6 px-3 py-2 '>
            <p className='font-bold mx-auto  md:text-6xl lg:text-[6rem] text-2xl   text-center text-white lg:pb-2'>
              12:12:12
            </p>
          </div>
          <div className='flex'>
            <button className='lg:px-8 px-10 py-2 text-lg lg:text-2xl mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-bold active:opacity-80 '>
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
