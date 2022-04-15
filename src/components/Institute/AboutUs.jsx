import React, { useState } from 'react'
import medicalImg from '../../images/medical.png'
import engeImg from '../../images/enge.png'
import webDevImg from '../../images/webDev.png'
import academicImg from '../../images/academic.png'
import programmingImg from '../../images/programming.png'
import webDesignImg from '../../images/webDesign.png'

export default function AboutUs() {
  const [readMore, setReadMore] = useState(false)
  const statisticalData = [
    {
      heading: '14k+',
      subTitle: 'Students enrolled',
    },
    {
      heading: '30+',
      subTitle: 'Number of courses',
    },
    {
      heading: '4.6+',
      subTitle: 'Average Rating',
    },
    {
      heading: '20+',
      subTitle: 'Achievements',
    },
  ]

  const platforms = [
    {
      title: 'Medical',
      image: medicalImg,
    },
    {
      title: 'Engineering',
      image: engeImg,
    },
    {
      title: 'Web Development',
      image: webDevImg,
    },
    {
      title: 'Academics',
      image: academicImg,
    },
    {
      title: 'Programming Languages',
      image: programmingImg,
    },
    {
      title: 'Web Design',
      image: webDesignImg,
    },
  ]
  return (
    <div
      name='About Us'
      className=' py-20 space-y-5 container mx-auto md:px-10 '
    >
      <div className='flex container mx-auto md:justify-around flex-wrap justify-center  '>
        <div className='md:w-6/12 mx-5'>
          <h1 className='text-4xl font-bold mb-10'>About Us</h1>
          <div className='md:hidden'>
            <p>
              With over 20 hours of training, quizzes and practical steps you
              can follow - this is one of the most comprehensive digital
              marketing courses available.{' '}
              {readMore && (
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi, omnis! Commodi quos quibusdam voluptatem accusantium
                  culpa dolorem veritatis cupiditate ipsum, eum pariatur
                  exercitationem iste blanditiis ullam voluptates quam fugit
                </span>
              )}
              <span
                onClick={() => setReadMore(!readMore)}
                className='text-[#7D23E0] cursor-pointer'
              >
                {readMore ? ' Read Less' : ' Read More'}
              </span>
            </p>
          </div>

          <div className='md:flex flex-col space-y-5 text-lg hidden'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              alias sunt earum, quo, vero doloribus qui aspernatur dolores
              voluptates voluptatem aliquam minus! Atque voluptatem et?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              tenetur illo veritatis laborum necessitatibus aspernatur corrupti
              officia mollitia, saepe ad maxime? Maiores, inventore et ipsum
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, omnis! Commodi quos quibusdam voluptatem accusantium
              culpa dolorem veritatis cupiditate ipsum, eum pariatur
              exercitationem iste blanditiis ullam voluptates quam fugit
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 h-fit md:gap-10 gap-5 mx-5 mt-5 '>
          {statisticalData.map((item, i) => (
            <div
              key={i}
              className='md:p-8 p-3  bg-white rounded-lg text-center md:space-y-5 space-y-3 shadow-ost shadow-gray-200 '
            >
              <h1 className='md:text-5xl text-3xl font-bold text-[#F99DCB]'>
                {item.heading}
              </h1>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div name='Categories' className='mx-5  py-20'>
        <h1 className='text-center mb-10 text-4xl py-10'>We specialize in</h1>
        <div className='grid lg:grid-cols-3 grid-cols-2 place-items-center md:gap-10 gap-8'>
          {platforms.map((item, i) => (
            <div
              key={i}
              className='relative md:h-[100px] h-[60px] md:w-[300px] w-full bg-black rounded-xl'
            >
              <img
                className='h-full w-full'
                src={item.image}
                alt={item.title}
              />
              <p className='absolute lg:text-xl sm:text-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center '>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
