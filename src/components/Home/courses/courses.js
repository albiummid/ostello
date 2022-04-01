import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
  return (
    <div className='px-20'>
      <div>
        <div className='flex justify-between items-center '>
          <h1 className='text-5xl font-bold'>Similar Courses</h1>
          <button className='px-2 py-1 text-xl ring-1 ring-[#7D23E0] text-[#7D23E0]'>
            View more
          </button>
        </div>
        <div className='flex justify-around my-10'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center my-10'>
          <h1 className='text-5xl font-bold'>
            Other Courses by XYZ Design Academy
          </h1>
          <button className='px-2 py-1 ring-1 ring-[#7D23E0] text-[#7D23E0] text-xl'>
            View more
          </button>
        </div>
        <div className='flex justify-around my-10'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}
