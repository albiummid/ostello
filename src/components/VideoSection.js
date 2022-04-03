import { PlayCircleFilled } from '@ant-design/icons'
import React from 'react'
import { constants } from '../constants'
import videoImage from '../images/v-image.png'

export default function VideoSection() {
  const { icons } = constants
  return (
    <>
      <div className='video_container my-10 flex flex-col gap-2 justify-center items-center '>
        <div className='relative w-[100%] flex md:w-[632px] md:h-[400px]  bg-[#7A81DC] justify-center items-center'>
          <img src={videoImage} className=' w-[100%] h-[100%]' alt='' />
          <PlayCircleFilled className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-7xl  text-5xl cursor-pointer active:opacity-75' />
          <div className='absolute top-[35px] right-[35px] p-3 bg-white flex rounded-lg gap-2'>
            <img src={icons.imgProto} className='' alt='' />
            <p className='text-[#414141]  font-medium text-lg hidden '>
              See more
            </p>
          </div>
        </div>
        <div className=' flex gap-2 justify content-center items-center'>
          <div className='h-2 w-[80px] bg-white rounded-lg'></div>
          <div className='h-2 w-[30px] bg-[#FFFFFF] rounded-lg' />
          <div className='h-2 w-[30px] bg-[#FFFFFF] rounded-lg' />
          <div className='h-2 w-[30px] bg-[#FFFFFF] rounded-lg' />
        </div>
      </div>
    </>
  )
}
