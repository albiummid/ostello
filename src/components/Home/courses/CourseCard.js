import {
  ArrowRightOutlined,
  HeartFilled,
  HeartOutlined,
  HeartTwoTone,
  RiseOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import React, { useState } from 'react'
import { constants } from '../../../constants'
import courseImg from '../../../images/courseImg.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

export default function CourseCard() {
  const [isActiveHeart, setHeart] = useState(false)
  const { icons } = constants
  return (
    <div className='lg:w-[476px] w-[100%] relative shadow-lg rounded-3xl'>
      <div className='relative'>
        <img src={courseImg} className='w-[100%] rounded-2xl  ' alt='' />
        <div className='flex items-center justify-center  gap-1 px-2 text-md text-white  font-bold bg-yellow-400 rounded-lg md:hidden absolute right-5 bottom-[10px] '>
          <p>3.0</p>
          <StarFilled />
        </div>
      </div>
      <div className=''>
        {isActiveHeart ? (
          <HeartFilled
            onClick={() => setHeart(!isActiveHeart)}
            className={`flex text-xl  w-8 h-8 md:h-12 md:w-12 rounded-full shadow-sm absolute right-5 top-5  items-center justify-center cursor-pointer  text-red-500 ring-2 ring-white md:text-3xl `}
          />
        ) : (
          <HeartOutlined
            onClick={() => setHeart(!isActiveHeart)}
            className={`flex items-center text-xl  text-white   w-8 h-8 md:h-12 md:w-12 rounded-full shadow-sm absolute right-5 top-5   justify-center cursor-pointer   ring-2 ring-white md:text-3xl`}
          />
        )}
      </div>

      <div className=' relative p-6 flex flex-col gap-3 bg-[#fffff]'>
        <div className=' flex  justify-between '>
          <div>
            <p className='md:text-2xl text-lg  text-[#767676]'>
              XYZ Design Academy
            </p>
            <p className='md:text-lg text-md font-bold'>UX Design Program</p>
          </div>

          <CopyToClipboard
            text='course-shared-link'
            onCopy={() => toast.success('Link has been copied to clipboard')}
          >
            <div className='p-2 w-10 h-10   rounded-full bg-white shadow-lg text-[#767676] justify-center items-center flex cursor-pointer '>
              <ShareAltOutlined className='text-2xl mb-1 mr-1' />
            </div>
          </CopyToClipboard>
        </div>

        <div className='flex justify-between md:flex-col gap-5 '>
          <div className='flex items-end justify-between '>
            <div>
              <div className='flex flex-col gap-2 font-medium text-[#767676]'>
                <div className='flex  items-center gap-2'>
                  <img className='-mx-1' src={icons.stopwatch} alt='' />
                  <p className='text-md font-bold'>3 months</p>
                </div>
                <div className='md:flex items-center gap-2 hidden '>
                  <RiseOutlined className='text-white bg-[#7D23E0] rounded-full p-[1px]' />

                  <p className='text-md font-bold'>
                    80+ Students joined recently
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={icons.money} alt='' />
                  <p className='text-md font-bold'>EMI Available</p>
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
              <p className='md:text-xl text-red-400 text-right md:text-left'>
                <del>Rs.1500</del>
              </p>
            </div>
            <div className='md:flex gap-2 items-center text-lg font-bold cursor-pointer active:opacity-75 select-none hidden'>
              <p>View Details</p>

              <ArrowRightOutlined className='h-7 w-7 flex items-center justify-center rounded-full ring-2 ring-[#7D23E0] text-[#7D23E0] text-lg font-bold ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
