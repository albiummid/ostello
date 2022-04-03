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
        <div className='learning_objectives  '>
          <h1 className='lg:text-5xl text-3xl pt-10 text-center lg:pt-20  font-medium text-white px-5 lg:px-20'>
            Learning Objectives
          </h1>
        </div>
        <div className=' flex lg:gap-14 justify-center flex-wrap gap-5 lg:flex-nowrap text-[#414141] -mt-[60px] lg:-mt-32'>
          {objectives.map((item, i) => (
            <div
              key={i}
              className='p-5 lg:px-10 w-[154px] lg:w-[320px] rounded-xl bg-white shadow-xl  lg:h-[298px] h-[135px] flex flex-col items-center justify-center lg:gap-5 '
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
    </section>
  )
}
