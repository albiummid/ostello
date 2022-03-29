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
      <div className='learning_objectives'>
        <h1 className='text-3xl text-center pt-10 text-white font-bold'>
          Learning Objectives
        </h1>
      </div>
      <div className='flex gap-10 justify-center h-[200px] '>
        {objectives.map((item, i) => (
          <div className='p-5 w-[200px] rounded-xl z-50 -mt-[80px] bg-white shadow-xl h-[170px]'>
            <img className=' w-[50px] mx-auto mb-4' src={item.icons} alt='' />
            <p className='text-center text-sm'>{item.title}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
