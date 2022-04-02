import React from 'react'
import Container from '../Layout/Container'

export default function OfferSection() {
  return (
    <div>
      <Container>
        <div className='offerBG p-3 text-white py-10 flex flex-col justify-center'>
          <div className='md:text-5xl text-lg font-medium'>
            <h1 className=' text-white  text-center'>Register early to get</h1>
            <h1 className=' text-white  text-center'>
              Rs. 1000 worth of coupons
            </h1>
          </div>
          <div className=' ring-2 ring-white w-fit mx-auto px-2 py-4 rounded-xl my-8'>
            <p className='font-bold mx-auto  md:text-6xl text-2xl px-4 text-center text-white '>
              12:12:12
            </p>
          </div>
          <div className='flex'>
            <button className='px-8 py-2 text-xl mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-bold active:opacity-80 '>
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
