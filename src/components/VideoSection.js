import { PlayCircleFilled } from '@ant-design/icons'
import React from 'react'
import { constants } from '../constants'
import videoImage from '../images/v-image.png'

export default function VideoSection() {
  const { icons } = constants
  return (
    <>
      <div className='video_container py-5 grid grid-cols-1 gap-5 place-items-center '>
        <div className='relative  bg-[#7A81DC]  '>
          <img
            src={videoImage}
            className=' w-full lg:w-[400px]  mx-auto xl:w-[500px]'
            alt=''
          />
          <PlayCircleFilled className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl  text-5xl cursor-pointer active:opacity-75' />
          <div className=' group absolute top-5 right-5 md:top-10 md:right-10 p-3 bg-white flex rounded-lg gap-2 transition-all ease-in-out duration-300  cursor-pointer'>
            <img src={icons.imgProto} className='' alt='' />
            <p className='text-[#414141] hidden group-hover:block   '>
              See more
            </p>
          </div>
        </div>
        <div className=' flex space-x-2 justify content-center items-center'>
          <div className='h-2 w-[80px] bg-white rounded-lg'></div>
          <div className='h-2 w-[30px] bg-[#FFFFFF] rounded-lg' />
          <div className='h-2 w-[30px] bg-[#FFFFFF] rounded-lg' />
          <div className='h-2 w-[30px] bg-[#FFFFFF] rounded-lg' />
        </div>
      </div>
    </>
  )
}
