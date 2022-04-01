import React from 'react'

import { ArrowLeftOutlined, UpOutlined } from '@ant-design/icons'
import VideoSection from './VideoSection'
import Card from './Card'
import time from '../images/icons/time.png'
import emi from '../images/icons/emi.png'
import certified from '../images/icons/certified.png'
import { constants } from '../constants'
import { Affix } from 'antd'

export default function Header() {
  const { images, icons } = constants
  return (
    <div className='overflow-x-hidden mb-10'>
      <div className=' wrapper w-screen select-none bg-[#7A81DC]'>
        <div className='header_container text-white  py-5 px-5 pb-[100px] bg-[#7A81DC]  '>
          <div className='hero_container mt-10 '>
            <div className='flex justify-evenly md:justify-between  gap-3 flex-wrap'>
              <div className='md:w-[50%] mx-auto'>
                <div className='flex justify-between flex-wrap'>
                  <div className='w-[100%]'>
                    <div className='h-6 w-6 rounded-full ring-1 ring-white flex justify-center items-center cursor-pointer mb-4'>
                      <ArrowLeftOutlined />
                    </div>
                  </div>
                  <div className=''>
                    <section className='intro'>
                      <div className='flex justify-between flex-wrap gap-2  '>
                        <p className='text-xl border-l-0 border-t-0 border-r-0 border border-white border-dashed w-fit'>
                          XYZ Design Academy
                        </p>
                        <div className='w-fit px-2 py-1 border border-white rounded-md flex gap-1 h-fit justify-center items-center cursor-pointer '>
                          <p className='text-sm'>More Info</p>
                          <img className='w-5' src={icons.arrowRight} alt='' />
                        </div>
                      </div>
                      <div className='flex gap-2 items-start mt-5 mb-10'>
                        <img className='w-6 5-5' src={icons.location} alt='' />
                        <p className=''>
                          273/2, Shahabad Mohammadpur, Vasant Kunj, New
                          Delhi-110061
                        </p>
                      </div>
                    </section>

                    <section className='Heading'>
                      <div className='mb-10'>
                        <p className='text-[56px] font-bold leading-tight '>
                          The Complete Digital Marketing Course
                        </p>
                        <p>
                          Master Digital Marketing Strategy, Social Media
                          Marketing, SEO,YouTube,Email,Facebook Marketing
                          Analytics & More!
                        </p>
                      </div>
                    </section>

                    <section className='statistics '>
                      <div className='flex w-[100%] justify-between items-center'>
                        <div className='info flex gap-5'>
                          <div className='rating flex justify-center items-center gap-1 bg-[#FFD130] px-2'>
                            <p>3.0</p>
                            <img className='w-4' src={icons.star} alt='' />
                          </div>
                          <p>669,534 students</p>
                        </div>
                        <div className='actions flex gap-5'>
                          <div className='ring-1 w-7 h-7 flex justify-center items-center ring-white rounded-full'>
                            <img className='w-3 ' src={icons.heart} alt='' />
                          </div>
                          <div className='ring-1 w-7 h-7 flex justify-center items-center ring-white rounded-full'>
                            <img className='w-3' src={icons.share} alt='' />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <VideoSection />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <section className=' w-[70%] Card flex justify-evenly text-[#414141] p-5 rounded-lg  bg-white  flex-wrap gap-5  shadow-xl mx-auto -mt-[70px] z-[999] my-10'>
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
      </div>
    </div>
  )
}
