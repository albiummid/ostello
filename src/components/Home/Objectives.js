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
    <div name='Objectives' className='py-20'>
      <>
        <div className='  learning_objectives md:h-[300px]  h-[200px]  '>
          <h1 className='lg:text-5xl text-3xl pt-10 text-center lg:pt-20  font-medium text-white mx-5 lg:px-20'>
            Learning Objectives
          </h1>
        </div>
        <Container>
          <div className=' grid grid-cols-2 md:flex justify-center place-items-center  xl:justify-between md:justify-around  mx-5  -mt-20 gap-5  '>
            {objectives.map((item, i) => (
              <div
                key={i}
                className='bg-white  xl:w-[250px] xl:h-[250px] lg:w-[180px] lg:h-[180px] h-[120px] w-[120px]  rounded-xl  shadow-xl    flex flex-col items-center justify-center  space-y-2  p-2  '
              >
                <img className=' w-10 xl:w-20 ' src={item.icons} alt='' />
                <p className='text-center text-xs lg:text-lg  '>{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </>
    </div>
  )
}
