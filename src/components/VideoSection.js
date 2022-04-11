import { CloseCircleOutlined, PlayCircleFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { constants } from '../constants'
import videoImage from '../images/v-image.png'

export default function VideoSection({ images }) {
  const { icons } = constants
  const navigate = useNavigate()
  return (
    <>
      <div className='video_container  w-full'>
        <div className='relative  bg-[#7A81DC]  '>
          <img src={videoImage} className=' w-full ' alt='' />
          <PlayCircleFilled className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl  text-5xl cursor-pointer active:opacity-75' />
          <div className=' group absolute top-5 right-5 md:top-10 md:right-10 p-3 bg-white flex rounded-lg gap-2 transition-all ease-in-out duration-300  cursor-pointer'>
            <img src={icons.imgProto} className='' alt='' />
            <p
              onClick={() => navigate('/details')}
              className='text-[#414141] hidden group-hover:block   '
            >
              See more
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
