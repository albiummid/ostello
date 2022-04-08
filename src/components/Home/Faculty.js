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
    <section name='Faculty' className=''>
      <Container className={'container mx-auto'}>
        <h1 className='text-4xl font-bold text-center py-10'>Faculty</h1>
        <div className='flex  md:gap-10 md:justify-center  items-center  py-10 overflow-x-scroll no-scrollbar'>
          {faculties.map((item, i) => (
            <div
              key={i}
              className='md:p-10 p-5 md:only:py-12 w-[300px] md:w-[376px] lg:mx-10 mx-2 shadow-2xl shrink-0 rounded-2xl '
            >
              <div className='mb-2 md:mb-8 text-center '>
                <img
                  className='h-[150px] w-[150px] mx-auto rounded-full my-2'
                  src={item.img}
                  alt=''
                />
                <p className='font-bold text-xl'>{item.name}</p>
                <p className='text-md text-[#A4A4A4]'>{item.degree}</p>
              </div>
              <p className='text-lg text-center'>{item.details}</p>
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
    </section>
  )
}
