import React from 'react'
import time from '../images/icons/time.png'
import emi from '../images/icons/emi.png'
import certified from '../images/icons/certified.png'

export default function Card() {
  return (
    <>
      <section className=' md:w-[70%] Card flex justify-evenly text-[#414141] p-5 rounded-lg  bg-white  flex-wrap gap-5  shadow-xl mx-auto -mt-[50px] z-[999]'>
        <div className='flex justify-center items-center gap-5 '>
          <div className='px-2 py-1 flex flex-col items-center justify-center'>
            <p className='text-sm font-bold mb-3'>1 Month</p>
            <div className='flex items-center gap-1'>
              <img className='w-4' src={time} alt='' />
              <p className='text-xs font-bold'>Duration</p>
            </div>
          </div>

          <div className='px-2 py-1 flex flex-col items-center justify-center'>
            <p className='text-sm font-bold mb-3'>Authorized Certificate</p>
            <div className='flex items-center gap-1'>
              <img className='w-4' src={certified} alt='' />
              <p className='text-xs font-bold'>Get Certified</p>
            </div>
          </div>
          <div className='px-2 py-1 flex flex-col items-center justify-center'>
            <p className='text-sm font-bold mb-3'>Rs.150/month</p>
            <div className='flex items-center gap-1'>
              <img className='w-4' src={emi} alt='' />
              <p className='text-xs font-bold'>EMI Options</p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className='text-[48px] font-bold text-[#414141]'>Rs. 499</p>
          <del className='text-red-400 text-[24px]'>Rs.1799</del>
        </div>
        <div className='flex flex-col justify-center'>
          <button className='w-fit px-3 py-1 mx-auto bg-[#7D23E0] rounded-md mb-3 text-white active:opacity-80'>
            Buy Now
          </button>
          <div className='text-xs text-center'>
            <p>
              <sup>*</sup>15-Day
            </p>
            <p>Money-Back Guarantee</p>
          </div>
        </div>
      </section>
    </>
  )
}
