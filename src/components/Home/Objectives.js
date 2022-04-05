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
        <div className=' grid grid-cols-2 gap-5 mx-5'>
          {objectives.map((item, i) => (
            <div
              key={i}
              className='bg-white   rounded-xl  shadow-xl   flex flex-col items-center justify-center  h-[135px] p-2'
            >
              <img className=' w-10 ' src={item.icons} alt='' />
              <p className='text-center text-md lg:text-lg  '>{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
