import React from 'react'

import { ArrowLeftOutlined, UpOutlined } from '@ant-design/icons'
import VideoSection from './VideoSection'
import Card from './Card'
import { constants } from '../constants'

export default function Header() {
  const { images, icons } = constants
  return (
    <div className='overflow-x-hidden  min-h-screen'>
      <div className=' wrapper w-screen select-none bg-[#7A81DC]  relative '>
        <div className='header_container text-white max-w-7xl mx-auto py-5 px-5 pb-[100px] bg-[#7A81DC]  '>
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
        <Card />
      </div>
      <div className='hidden absolute right-10 bottom-7 h-10 w-10 rounded-full bg-white xl:flex justify-center items-center active:opacity-80 shadow-xl'>
        <UpOutlined className='text-sm mb-1' />
      </div>
    </div>
  )
}
