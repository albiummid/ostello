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
        <h1 className='lg:text-5xl text-3xl pt-10 text-center lg:pt-20 my-auto font-bold text-white px-5 lg:px-20'>
          Learning Objectives
        </h1>
      </div>
      <div className=' lg:flex lg:gap-14 justify-center flex-wrap lg:flex-nowrap text-[##414141] h-[400px] grid grid-cols-2 md:-mt-[180px] place-items-center -mt-[100px]'>
        {objectives.map((item, i) => (
          <div
            key={i}
            className='p-5 w-[154px] lg:w-[250px] rounded-xl bg-white shadow-xl  lg:h-[250px] h-[135px] flex flex-col items-center justify-center lg:gap-5  '
          >
            <img
              className=' w-[40px] lg:w-[94px] mx-auto mb-4'
              src={item.icons}
              alt=''
            />
            <p className='text-center lg:text-lg  w-[16ch] '>{item.title}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
