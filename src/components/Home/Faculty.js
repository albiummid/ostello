import React from 'react'
import Container from '../Layout/Container'
import mahima from '../../images/mahima.jpg'
import vishal from '../../images/nitiya.jpg'
import nitiya from '../../images/vishal.jpg'

export default function Faculty() {
  const faculties = [
    {
      name: 'Mahina Singh',
      degree: 'PHD, MSc',
      img: mahima,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
    },
    {
      name: 'Vishal Kumar',
      degree: 'PHD, MSc',
      img: nitiya,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
    },
    {
      name: 'Nitya Kashyap',
      degree: 'PHD, MSc',
      img: vishal,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
    },
  ]
  return (
    <div className='pt-10 '>
      <Container>
        <h1 className='text-4xl font-bold text-center py-10'>Faculty</h1>
        <div className='flex gap-10 justify-center py-5'>
          {faculties.map((item, i) => (
            <div key={i} className='p-5 w-[300px] shadow-2xl rounded-2xl '>
              <div className='mb-8 text-center '>
                <img
                  className='h-[150px] w-[150px] mx-auto rounded-full my-2'
                  src={item.img}
                  alt=''
                />
                <p className='font-bold'>{item.name}</p>
                <small
                  className='text-[
#A4A4A4]'
                >
                  {item.degree}
                </small>
              </div>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
        <div className='flex gap-2 justify-center items-center my-10 cursor-pointer '>
          <div className='bg-[#7D23E0] h-2 w-[80px] rounded-xl'></div>
          <div className='bg-[#7D23E0] opacity-40 h-2 w-[20px] rounded-xl'></div>
          <div className='bg-[#7D23E0] opacity-40 h-2 w-[20px] rounded-xl'></div>
          <div className='bg-[#7D23E0] opacity-40 h-2 w-[20px] rounded-xl'></div>
        </div>
      </Container>
    </div>
  )
}
