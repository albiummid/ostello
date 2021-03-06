import React from 'react'
import { Link } from 'react-router-dom'

export default function Platforms() {
  const platforms = [
    {
      name: 'School',
      categories: [
        {
          title: 'Class 5',
          url: '/',
        },
        {
          title: 'Class 6',
          url: '/',
        },
        {
          title: 'Class 7',
          url: '/',
        },
        {
          title: 'Class 8',
          url: '/',
        },
        {
          title: 'Class 9',
          url: '/',
        },
        {
          title: 'Class 10',
          url: '/',
        },
        {
          title: 'Class 11',
          url: '/',
        },
        {
          title: 'Class 12',
          url: '/',
        },
      ],
    },
    {
      name: 'Engineering',
      categories: [
        {
          title: 'JEE Main',
          url: '/',
        },
        {
          title: 'JEE Advanced',
          url: '/',
        },
        {
          title: 'GATE',
          url: '/',
        },
        {
          title: 'NATA',
          url: '/',
        },
        {
          title: 'DUET',
          url: '/',
        },
        {
          title: 'AMET',
          url: '/',
        },
        {
          title: 'CIPET JEE',
          url: '/',
        },
        {
          title: 'IMU CET',
          url: '/',
        },
      ],
    },
    {
      name: 'Medical',
      categories: [
        {
          title: 'NEET',
          url: '',
        },
        {
          title: 'NEET PG',
          url: '',
        },
        {
          title: 'AIIMS',
          url: '',
        },
        {
          title: 'AIIMS PG',
          url: '',
        },
        {
          title: 'PGIMER',
          url: '',
        },
        {
          title: 'CMSE',
          url: '',
        },
        {
          title: 'NBE FET',
          url: '',
        },
      ],
    },
    {
      name: 'Skill Based',
      categories: [
        {
          title: 'Digital Marketing',
          url: '',
        },
        {
          title: 'Business Analytics',
          url: '',
        },
        {
          title: 'Financial Modeling',
          url: '',
        },
        {
          title: 'Machine Learning',
          url: '',
        },
        {
          title: 'Robotics',
          url: '',
        },
        {
          title: 'Photography',
          url: '',
        },
        {
          title: 'User Interface Design',
          url: '',
        },
        {
          title: '3D Animation and VFX',
          url: '',
        },
      ],
    },
  ]
  return (
    <>
      <div className='lg:flex space-x-5 justify-around py-20 px-10 bg-[#F3F5F7] hidden '>
        {platforms.map((item, i) => (
          <div key={i}>
            <p className='font-bold md:text-2xl text-xl my-5'>{item.name}</p>
            <div className='flex flex-col text-xl'>
              {item.categories.map((category, idx) => (
                <Link to={category.url} key={idx}>
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
