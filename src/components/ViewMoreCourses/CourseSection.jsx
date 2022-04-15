import React from 'react'
import CourseCard from '../Home/Courses/CourseCard'
import FilterBar from './FilterBar'
import medicalImg from '../../images/medical.png'
import engeImg from '../../images/enge.png'
import webDevImg from '../../images/webDev.png'
import academicImg from '../../images/academic.png'
import programmingImg from '../../images/programming.png'
import webDesignImg from '../../images/webDesign.png'

export default function CourseSection() {
  const platforrms = [
    {
      title: 'Medical',
      image: medicalImg,
    },
    {
      title: 'Engineering',
      image: engeImg,
    },
    {
      title: 'Web Development',
      image: webDevImg,
    },
    {
      title: 'Academics',
      image: academicImg,
    },
    {
      title: 'Programming Languages',
      image: programmingImg,
    },
    {
      title: 'Web Design',
      image: webDesignImg,
    },
  ]
  return (
    <div className='container mx-auto md:py-20 '>
      <div className='mx-5 '>
        <p className='my-5'>Home / Lorem / Lorem /Lorem Ispum</p>
        <FilterBar />
        <div className='grid  grid-flow-col-dense gap-5 overflow-x-scroll no-scrollbar my-5'>
          {platforrms.map((item, i) => (
            <div className='relative md:h-[100px] h-[40px] w-[150px] bg-black rounded-xl'>
              {/* <img
                className='h-full w-full object-fit'
                src={item.image}
                alt={item.title}
              /> */}
              <p className='absolute lg:text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xs '>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <h1 className='my-10 md:text-4xl text-2xl'>Courses we offer</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20 grid-cols-1 place-items-center'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5].map((item, i) => (
            <CourseCard />
          ))}
        </div>
      </div>
    </div>
  )
}
