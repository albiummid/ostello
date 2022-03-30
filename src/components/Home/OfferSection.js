import React from 'react'
import Container from '../Layout/Container'

export default function OfferSection() {
  return (
    <div>
      <Container>
        <div className='offerBG p-3 text-white py-10 flex flex-col justify-center'>
          <h1 className='text-xl font-bold text-center'>
            Register early to get
          </h1>
          <h1 className='text-xl font-bold text-center'>
            Rs. 1000 worth of coupons
          </h1>
          <div className=' ring-2 ring-white w-fit mx-auto px-2 py-4 rounded-xl my-8'>
            <p className='font-bold mx-auto  text-6xl text-center text-white '>
              12:12:12
            </p>
          </div>
          <div className='flex'>
            <button className='px-6 py-1 text-sm w-fit mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-bold active:opacity-80'>
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
