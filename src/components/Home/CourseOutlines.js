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
    <div className='bg-[gradient(180deg, rgba(122, 129, 220, 0.1) 0%, rgba(196, 196, 196, 0) 68.86%)]'>
      <Container>
        <h1 className='mb-10 text-5xl text-center font-bold'>
          What's in the course
        </h1>
        <div>
          {outlines.map((item, i) => (
            <div
              key={i}
              className='max-w-3xl my-2 text-white mx-auto '
              onClick={() => setActiveKey(i)}
            >
              <div className='bg-[#7A81DC] flex justify-between p-2 rounded-xl cursor-pointer active:opacity-75 px-3 '>
                <div className='flex gap-5 justify-center items-center   '>
                  {activeKey === i ? (
                    <UpOutlined className='text-sm' />
                  ) : (
                    <DownOutlined className='text-sm' />
                  )}
                  <p className=''>
                    Part {i + 1} - {item.title}
                  </p>
                </div>
                <div className='flex gap-2 items-center '>
                  <p className='text-sm'>{item.lectureCount} lectures</p>.
                  <p className='text-sm'>{item.lectureHours} hours</p>
                </div>
              </div>

              <p
                className={
                  activeKey === i
                    ? 'text-black ring-2 p-2 rounded-lg mt-1'
                    : 'hidden'
                }
              >
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
