import React from 'react'
import { constants } from '../../constants'
import Container from '../Layout/Container'

export default function Objectives() {
  const { icons } = constants
  const objectives = [
    {
      title: 'Learn How to do user research',
      icons: icons.calculation,
    },
    {
      title: 'Learn efficient Data Optimization',
      icons: icons.siteMap,
    },
    {
      title: 'Get to know Digital Marketing Basics',
      icons: icons.searchFile,
    },
    {
      title: 'Master the skills of SEO',
      icons: icons.barGraph,
    },
  ]
  return (
    <Container>
      <div className='learning_objectives  '>
        <h1 className='md:text-5xl text-3xl pt-10 text-center md:pt-20 my-auto font-bold text-white '>
          Learning Objectives
        </h1>
      </div>
      <div
        className=' md:flex md:gap-10 justify-center flex-wrap md:flex-nowrap text-[#
#414141] h-[400px] grid grid-cols-2  md:-mt-[160px] place-items-center -mt-[100px] '
      >
        {objectives.map((item, i) => (
          <div
            key={i}
            className='p-5 w-[154px] md:w-[320px] rounded-xl   bg-white shadow-xl  md:h-[300px] h-[135px] flex flex-col items-center justify-center md:gap-10  '
          >
            <img
              className=' w-[40px] md:w-[94px] mx-auto mb-4'
              src={item.icons}
              alt=''
            />
            <p className='text-center md:text-lg  w-[16ch] '>{item.title}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
