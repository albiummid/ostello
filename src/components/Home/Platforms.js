import { data } from 'autoprefixer'
import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Layout/Container'

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
      <div className='flex gap-5 justify-around p-10 bg-[#F3F5F7] x'>
        {platforms.map((item, i) => (
          <div key={i}>
            <p className='font-bold text-lg my-5'>{item.name}</p>
            <div className='flex flex-col'>
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
