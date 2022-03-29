import { PlayCircleFilled } from '@ant-design/icons'
import React from 'react'
import videoImage from '../images/v-image.png'

export default function VideoSection() {
  return (
    <>
      <div className='video_container my-10 flex flex-col gap-2 justify-center items-center mx-auto'>
        <div className='relative w-[100%] flex md:w-[500px] md:h-[350px] bg-[#7A81DC] justify-center items-center'>
          <img src={videoImage} className=' w-[100%] h-[100%]' alt='' />
          <PlayCircleFilled className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl cursor-pointer active:opacity-75' />
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
