import React, { useState } from 'react'
import stats from '../images/icons/statistics.png'
import connection from '../images/icons/connecion.png'
import message from '../images/icons/message.png'
import poster from '../images/icons/poster.png'
import like from '../images/icons/like.png'

export default function CourseOverview() {
  const [readMore, setReadMore] = useState(false)
  const keyPoints = [
    {
      title: '22.5 hours on-demand videos and recording',
      icon: stats,
    },
    {
      title: '8 downloadable resources',
      icon: connection,
    },
    {
      title: 'Full lifetime access of the recordings',
      icon: message,
    },
    {
      title: 'Get full time access of the recordings',
      icon: poster,
    },
    {
      title: 'Get an authorized certified of completion',
      icon: like,
    },
  ]
  return (
    <section className=' course_overview flex lg:flex-row flex-col gap-4 justify-between lg:px-40 px-5 pb-[200px] items-center'>
      <div className=' lg:w-[50%] text-[#414141]  text-justify'>
        <h1 className='lg:text-5xl text-4xl  text-rights font-medium mb-10'>
          Course Overview
        </h1>
        <div className={'text-lg  text-justify lg:block hidden'}>
          <p className='mb-3'>
            With over 20 hours of training, quizzes and practical steps you can
            follow - this is one of the most comprehensive digital marketing
            courses available. We'll cover SEO, YouTube Marketing, Facebook
            Marketing, Google Adwords, Google Analytics and more! The course is
            hugely interactive with projects, checklists & actionable lectures
            built into every section.
          </p>
          <p className='mb-3'>
            Learn step by step how to market a business online from scratch
            across all the major marketing channels. Follow the steps on screen
            to get results at work, for own business or for your digital
            marketing clients.
          </p>
          <p className='mb-3'>
            By the end of this course, you will be confidently implementing
            marketing strategies across the major online marketing channels. All
            the strategies, tips and tools recommended are either free or very
            cost effective.
          </p>
        </div>
        <div className='text-lg font-medium lg:hidden'>
          <p>
            With over 20 hours of training, quizzes and practical steps you can
            follow - this is one of the most comprehensive digital marketing
            courses available.{' '}
            <span
              onClick={() => setReadMore(true)}
              className={
                'text-[#7D23E0] cursor-pointer ' + (readMore ? 'hidden' : null)
              }
            >
              Read More
            </span>
            {readMore && (
              <span>
                We'll cover SEO, YouTube Marketing, Facebook Marketing, Google
                Adwords, Google Analytics and more! The course is hugely
                interactive with projects, checklists & actionable lectures
                built into every section.
              </span>
            )}
            <span
              onClick={() => setReadMore(false)}
              className={
                'text-[#7D23E0] cursor-pointer ' + (readMore ? null : 'hidden')
              }
            >
              Read Less
            </span>
          </p>
        </div>
      </div>
      <div className='p-10 ring-2 ring-[#7178D3] rounded-xl h-fit font-medium'>
        <h1 className='text-[32px] pb-2'>Key Highlights</h1>
        <div className=''>
          {keyPoints.map((item, i) => (
            <div key={i} className='flex gap-5 my-2'>
              <img className='w-4 h-4' src={item.icon} alt='' />
              <p className='text-lg'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
