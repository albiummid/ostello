import React from 'react'
import Container from '../Layout/Container'

export default function OfferSection() {
  return (
    <div className=''>
      <>
        <div className='offerBG  '>
          <Container
            className={
              'p-3 text-white flex items-center flex-col justify-center lg:gap-5  h-full'
            }
          >
            <div className='xl:text-3xl text-xl font-medium'>
              <h1 className=' text-white  text-center lg:my-4'>
                Register early to get
              </h1>
              <h1 className=' text-white  text-center'>
                Rs. 1000 worth of coupons
              </h1>
            </div>
            <div className=' ring-2 lg:ring-4 ring-white w-fit mx-auto  rounded-xl my-8 xl:py-8 xl:px-16 px-6 py-2 '>
              <p className='font-bold mx-auto  md:text-4xl xl:text-5xl text-2xl   text-center text-white lg:pb-2'>
                12:12:12
              </p>
            </div>
            <div className='flex'>
              <button className='lg:px-8 px-10 py-2 text-lg lg:text-2xl mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-bold active:opacity-80 '>
                Sign Up
              </button>
            </div>
          </Container>
        </div>
      </>
    </div>
  )
}
