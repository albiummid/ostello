import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CourseCard from './CourseCard'

export default function Courses() {
  const navigate = useNavigate()
  return (
    <div name='Courses' className='lg:px-10 px-5 py-20 container  mx-auto'>
      <div className='mb-20 md:mx-10 '>
        <div className='flex justify-between items-center  mb-2'>
          <h1 className='md:text-4xl text-3xl font-medium'>Similar Courses</h1>
          <button className='px-4 py-2 w-[157px] text-xl ring-1 md:flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 hidden '>
            <p>View more</p>
            <RightOutlined className='text-[#7D23E0] text-lg' />
          </button>
        </div>
        <div className='flex  md:justify-between  my-16 lg:my-20 flex-col justify-center items-center lg:flex-row space-y-5 lg:space-y-0 lg:space-x-12'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <button
          onClick={() => navigate('/viewMoreCourse')}
          className='my-10 px-4 py-2 w-[150px] text-xl ring-1  mx-auto flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 md:hidden '
        >
          <p>View more</p>
          <RightOutlined className='text-[#7D23E0] text-lg' />
        </button>
      </div>
      <div className='md:mx-10'>
        <div className='flex justify-between items-center  '>
          <h1 className='md:text-3xl text-3xl font-medium '>
            Other Courses by XYZ <br className='lg:hidden' /> Design Academy
          </h1>
          <button className='px-4 py-2 w-[157px] text-xl ring-1 md:flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 hidden'>
            <p>View more</p>
            <RightOutlined className='text-[#7D23E0] text-lg' />
          </button>
        </div>
        <div className='flex  md:justify-between  my-16 lg:my-20 flex-col justify-center items-center lg:flex-row space-y-5 lg:space-y-0 lg:space-x-12'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <button
          onClick={() => navigate('/viewMoreCourse')}
          className='my-10 px-4 py-2 w-[150px] text-xl ring-1  mx-auto flex justify-between items-center ring-[#7D23E0] text-[#7D23E0] rounded-lg active:opacity-75 md:hidden '
        >
          <p>View more</p>
          <RightOutlined className='text-[#7D23E0] text-lg ' />
        </button>
      </div>
    </div>
  )
}
