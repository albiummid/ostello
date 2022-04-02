import {
  ArrowRightOutlined,
  HeartFilled,
  HeartOutlined,
  RiseOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import React from 'react'
import { constants } from '../../../constants'
import courseImg from '../../../images/courseImg.png'

export default function CourseCard() {
  const { icons } = constants
  return (
    <div className='md:w-[476px] w-[100%] relative shadow-lg rounded-3xl'>
      <img src={courseImg} className='w-[100%] ' alt='' />
      <div className=' w-[50px] h-[50px] rounded-full shadow-sm absolute right-5 top-5 bg-white flex items-center justify-center cursor-pointer '>
        <HeartOutlined className='text-gray-600 text-3xl mb-1' />
      </div>
      <div className='flex items-center justify-center  gap-1 px-2 py-1 text-md text-white  font-bold bg-yellow-400 rounded-lg md:hidden absolute right-5 top-[140px] '>
        <p>3.0</p>
        <StarFilled />
      </div>
      <div className='p-6 flex flex-col gap-3'>
        <div className=' flex items-center justify-between '>
          <div>
            <p className='text-2xl  text-[#767676]'>XYZ Design Academy</p>
            <p className='text-lg font-bold'>UX Design Program</p>
          </div>
          <div className='p-2 w-[50px] h-[50px]   rounded-full bg-white shadow-lg text-[#767676] justify-center items-center flex cursor-pointer '>
            <ShareAltOutlined className='text-2xl mb-1 mr-1' />
          </div>
        </div>

        <div className='flex justify-between md:flex-col '>
          <div className='flex items-end justify-between '>
            <div>
              <div className='flex flex-col gap-2 font-bold text-[#767676]'>
                <div className='flex  items-center gap-2'>
                  <img className='-mx-1' src={icons.stopwatch} alt='' />
                  <p className='text-md'>3 months</p>
                </div>
                <div className='md:flex items-center gap-2 hidden '>
                  <RiseOutlined className='text-white bg-[#7D23E0] rounded-full p-[1px]' />

                  <p className=' '>80+ Students joined recently</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={icons.money} alt='' />
                  <p>EMI Available</p>
                </div>
              </div>
            </div>
            <div className='md:flex items-center justify-center  gap-1 px-2  text-2xl text-white  font-bold bg-yellow-400 rounded-lg hidden '>
              <p>3.0</p>
              <StarFilled />
            </div>
          </div>
          <div className='flex justify-between items-center '>
            <div>
              <p className='md:text-3xl text-xl font-bold'>Rs. 599</p>
              <p className='md:text-xl text-red-400 text-right'>
                <del>Rs.1500</del>
              </p>
            </div>
            <div className='md:flex gap-2 items-center text-lg font-bold cursor-pointer active:opacity-75 select-none hidden'>
              <p>View Details</p>
              <div className='h-7 w-7 flex items-center justify-center rounded-full ring-2 ring-[#7D23E0]'>
                <ArrowRightOutlined className='text-[#7D23E0] text-lg font-bold mb-1' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
