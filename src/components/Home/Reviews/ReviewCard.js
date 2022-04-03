import { Rate } from 'antd'
import React from 'react'

export default function ReviewCard() {
  const contents = [
    {
      title: 'image',
      url: '',
    },
  ]
  return (
    <div>
      <div className='flex items-center'>
        <img src='' alt='' />
        <div>
          <h1 className='text-2xl font-bold'>Neena Sharma</h1>
          <p className='text-lg'>February,2021</p>
          <Rate value={5} className=' self-start' />
        </div>
      </div>
      <div className='flex flex-col gap-2 my-2'>
        <p className='text-lg'>
          This course is definitely above expectations so far. I didn't expect
          to get so much insight into the briefing and the communication between
          UX Designer and a client.
        </p>
        <p className='text-xl text-[#7D23E0]'>Show More</p>
      </div>
      <div className='flex items-center no-scrollbar overflow-x-scroll'>
        {contents.map((item, i) => (
          <div>
            <img src={item.url} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}
