import React from 'react'

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import VideoSection from './VideoSection'
import time from '../images/icons/time.png'
import emi from '../images/icons/emi.png'
import certified from '../images/icons/certified.png'
import { constants } from '../constants'

export default function Header() {
  const { icons } = constants
  return (
    <div className='overflow-x-hidden mb-10 '>
      <div className=' wrapper w-screen select-none bg-[#7A81DC]'>
        <div className='header_container text-white  py-5 px-10 pb-[200px] bg-[#7A81DC]  '>
          <div className='hero_container mt-10 '>
            <div className='flex justify-evenly md:justify-between  gap-3 flex-wrap'>
              <div className='lg:w-[50%] mx-auto'>
                <div className='flex justify-between flex-wrap'>
                  <div className='w-[100%]'>
                    <div className='h-6 w-6 hidden md:h-[42px] md:w-[42px] rounded-full ring-2 ring-white md:flex justify-center items-center cursor-pointer mb-4 font-bold '>
                      <ArrowLeftOutlined className='font-bold ' />
                    </div>
                  </div>
                  <div className=''>
                    <section className='intro flex  flex-col '>
                      <div className='flex justify-between flex-wrap gap-2 flex-col md:flex-row items-center '>
                        <p className='md:text-4xl text-2xl  text-center md:text-left border-t-0 border-l-0 border-r-0 border-2 border-dashed w-[100%] md:w-fit  pb-2'>
                          XYZ Design Academy
                        </p>
                        <div className='w-fit px-3 py-2 border border-white rounded-md md:flex gap-2 h-fit justify-center items-center cursor-pointer active:opacity-75 hidden mx-auto'>
                          <p className='text-lg'>More Info</p>

                          <div className='w-[25px] h-[25px] flex justify-center items-center ring-1 ring-white rounded-full'>
                            <ArrowRightOutlined className='text-lg mb-1' />
                          </div>
                        </div>
                      </div>
                      {/* <div className='w-screen mt-2 border-2 border-t-0 border-l-0 border-r-0 border-dashed border-white h-1 md:hidden'></div> */}
                      <div className='flex gap-2 items-start mt-5 mb-5'>
                        <img className='w-6 5-5' src={icons.location} alt='' />
                        <p className='md:text-lg text-lg w-[36ch]'>
                          273/2, Shahabad Mohammadpur, Vasant Kunj, New
                          Delhi-110061
                        </p>
                      </div>
                      <div className='w-fit mx-auto px-3 py-2 border border-white rounded-md flex gap-2 h-fit justify-center items-center cursor-pointer active:opacity-75 md:hidden'>
                        <p className='text-lg'>More Info</p>

                        <div className='w-[25px] h-[25px] flex justify-center items-center ring-1 ring-white rounded-full'>
                          <ArrowRightOutlined className='text-lg mb-1' />
                        </div>
                      </div>
                    </section>

                    <section className='Heading flex justify-center mt-10'>
                      <div className='mb-10 '>
                        <p className='md:text-[56px] font-bold text-center md:text-left  leading-tight w-[20ch] mx-auto mb-2 text-4xl'>
                          The Complete Digital Marketing Course
                        </p>
                        <p className='md:text-xl text-center md:text-left text-lg w-[40ch] md:w-[60ch] text-center md:text-start'>
                          Master Digital Marketing Strategy, Social Media
                          Marketing,SEO,YouTube,Email,Facebook Marketing
                          Analytics & More!
                        </p>
                      </div>
                    </section>
                    <div className='md:hidden'>
                      <VideoSection />
                    </div>

                    <section className='statistics '>
                      <div className='flex justify-between items-center'>
                        <div className='info flex items-center gap-5 '>
                          <div className='rating flex justify-center items-center gap-1 bg-[#FFD130] px-2 py- md:w-[86px] md:text-2xl rounded-lg font-bold'>
                            <p>3.0</p>
                            <StarFilled />
                          </div>
                          <p className='text-xl'>669,534 students</p>
                        </div>
                        <div className='actions flex gap-5 md:text-2xl'>
                          <div className='active:opacity-80 md:w-[52px] md:h-[52px] w-[28px] h-[28px]  rounded-full ring-1 ring-white flex items-center justify-center cursor-pointer'>
                            <HeartOutlined />
                          </div>
                          <div className='active:opacity-80 md:w-[52px] md:h-[52px] w-[28px] h-[28px] rounded-full ring-1 ring-white flex items-center justify-center cursor-pointer'>
                            <ShareAltOutlined />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <div className='md:block hidden'>
                <VideoSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <section className=' md:w-[1347px] Card flex justify-evenly text-[#414141] p-10 rounded-3xl md:flex-row flex-col  bg-white  flex-wrap gap-5  shadow-xl md:mx-auto md-mt-[90px] -mt-[150px] z-[999] my-10 mx-5'>
          <div className='md:grid grid-cols-3 gap-5   '>
            <div className='px-2 py-1 flex flex-col items-center font-medium w-[100%] pb-5 justify-center '>
              <p className='text-2xl  mb-3'>1 Month</p>
              <div className='flex items-center gap-1'>
                <img className='w-4' src={time} alt='' />
                <p className='text-lg '>Duration</p>
              </div>
            </div>

            <div className=' md:hidden border-2 mb-3 border-[#7A81DC] md:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />

            <div className='px-2 py-1 flex flex-col items-center font-medium  pb-5 justify-center '>
              <p className='text-2xl  mb-3'>Authorized Certificate</p>
              <div className='flex items-center gap-1'>
                <img className='w-4' src={certified} alt='' />
                <p className='text-lg '>Get Certified</p>
              </div>
            </div>

            <div className=' md:hidden border-2 mb-3 border-[#7A81DC] md:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />

            <div className='px-2 py-1 flex font-medium flex-col items-center j pb-5 justify-center '>
              <p className='text-2xl  mb-3'>Rs.150/month</p>
              <div className='flex items-center gap-1'>
                <img className='w-4' src={emi} alt='' />
                <p className='text-lg '>EMI Options</p>
              </div>
            </div>
            <div className=' md:hidden border-2 border-[#7A81DC] md:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />
          </div>
          <div className='text-center'>
            <p className='text-[48px] font-bold text-[#414141]'>Rs. 499</p>
            <del className='text-red-400 text-[24px]'>Rs.1799</del>
          </div>
          <div className='flex flex-col justify-center'>
            <button className=' px-10 py-3 mx-auto bg-[#7D23E0] rounded-md mb-3 text-white active:opacity-80 text-3xl '>
              Buy Now
            </button>
            <div className='text-md text-center flex md-block justify-center gap-2 md-text-sm'>
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
