import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import Container from '../Layout/Container'

export default function CourseOutlines() {
  const [activeKey, setActiveKey] = useState(0)
  const outlines = [
    {
      title: 'Course introduction',
      lectureCount: 3,
      lectureHours: 4,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      title: 'Digital Marketing tools',
      lectureCount: 3,
      lectureHours: 4,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      title: 'Market Research',
      lectureCount: 3,
      lectureHours: 4,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      title: 'Search Engine optimization',
      lectureCount: 3,
      lectureHours: 4,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      title: 'Marketing ethics',
      lectureCount: 3,
      lectureHours: 4,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
    {
      title: 'Conclusion',
      lectureCount: 3,
      lectureHours: 4,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    },
  ]
  return (
    <div className='bg-[##E5E5E5]'>
      <Container
        onClick={() => console.log('albi')}
        name='Syllabus'
        className={'py-20'}
      >
        <h1 className='my-10 text-3xl md:text-5xl text-center font-bold'>
          What's in the course
        </h1>
        <div className=' px-5'>
          {outlines.map((item, i) => (
            <div
              key={i}
              className='lg:w-[1000px] my-2 text-white mx-auto '
              onClick={() => setActiveKey(i === activeKey ? null : i)}
            >
              <div className='bg-[#7A81DC] flex justify-between rounded-md cursor-pointer active:opacity-75 px-3 py-4   '>
                <div className='flex space-x-2 justify-center items-center ml-2 text-md md:text-xl  '>
                  {activeKey === i ? (
                    <UpOutlined className='  flex justify-center' />
                  ) : (
                    <DownOutlined className='  flex justify-center' />
                  )}
                  <p className=''>
                    Part {i + 1} - {item.title}
                  </p>
                </div>
                <div className='md:flex space-x-2 items-center  hidden'>
                  <p className='text-md'>{item.lectureCount} lectures</p>.
                  <p className='text-md'>{item.lectureHours} hours</p>
                </div>
              </div>

              <div className=''>
                <p
                  className={
                    activeKey === i
                      ? 'text-black ring-2 p-2 rounded-lg md:text-lg mt-1 mb-5 '
                      : 'hidden'
                  }
                >
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
