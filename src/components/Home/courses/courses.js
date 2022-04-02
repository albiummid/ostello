import { ArrowRightOutlined, RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
  return (
    <div className='md:px-40 px-5 py-20'>
      <div className='mb-40'>
        <div className='flex justify-between items-center  '>
          <h1 className='md:text-5xl text-4xl font-medium'>Similar Courses</h1>
          <button className='px-4 py-2 w-[157px] text-xl ring-1 md:flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 hidden '>
            <p>View more</p>
            <RightOutlined className='text-[#7D23E0] text-lg' />
          </button>
        </div>
        <div className='flex justify-between my-10 flex-col md:flex-row gap-5 '>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <button className='my-10 px-4 py-2 w-[150px] text-xl ring-1  mx-auto flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 md:hidden '>
          <p>View more</p>
          <RightOutlined className='text-[#7D23E0] text-lg' />
        </button>
      </div>
      <div>
        <div className='flex justify-between items-center '>
          <h1 className='md:text-5xl text-4xl font-medium '>
            Other Courses by XYZ Design Academy
          </h1>
          <button className='px-4 py-2 w-[157px] text-xl ring-1 md:flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 hidden'>
            <p>View more</p>
            <RightOutlined className='text-[#7D23E0] text-lg' />
          </button>
        </div>
        <div className='flex justify-between my-10 flex-col md:flex-row gap-5'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <button className='my-10 px-4 py-2 w-[150px] text-xl ring-1  mx-auto flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 md:hidden '>
          <p>View more</p>
          <RightOutlined className='text-[#7D23E0] text-lg ' />
        </button>
      </div>
    </div>
  )
}
