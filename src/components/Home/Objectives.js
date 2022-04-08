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
    <section name='Objectives' className='py-10'>
      <Container>
        <div className='  learning_objectives lg:h-[300px] h-[200px] '>
          <h1 className='lg:text-5xl text-3xl pt-10 text-center lg:pt-20  font-medium text-white mx-5 lg:px-20'>
            Learning Objectives
          </h1>
        </div>
        <div className=' grid grid-cols-2 md:flex md:justify-center  gap-5   mx-5 justify-between -mt-20 md:mx-20'>
          {objectives.map((item, i) => (
            <div
              key={i}
              className='bg-white  md:w-[300px]   rounded-xl  shadow-xl   flex flex-col items-center justify-center md:gap-5 gap-2 md:mx-auto py-4 px-2 md:p-5 '
            >
              <img className=' w-10 md:w-20 ' src={item.icons} alt='' />
              <p className='text-center text-sm lg:text-lg  '>{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
