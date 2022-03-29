import React from 'react'
import stats from '../images/icons/statistics.png'
import connection from '../images/icons/connecion.png'
import message from '../images/icons/message.png'
import poster from '../images/icons/poster.png'
import like from '../images/icons/like.png'

export default function CourseOverview() {
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
    <section className='my-10 course_overview max-w-7xl mx-auto flex md:flex-row flex-col gap-4 justify-between '>
      <div className=' md:w-[50%]   text-justify'>
        <h1 className='text-[48px] text-rights mb-4'>Course Overview</h1>
        <p className='mb-3'>
          With over 20 hours of training, quizzes and practical steps you can
          follow - this is one of the most comprehensive digital marketing
          courses available. We'll cover SEO, YouTube Marketing, Facebook
          Marketing, Google Adwords, Google Analytics and more! The course is
          hugely interactive with projects, checklists & actionable lectures
          built into every section.
        </p>
        <p className='mb-3'>
          Learn step by step how to market a business online from scratch across
          all the major marketing channels. Follow the steps on screen to get
          results at work, for own business or for your digital marketing
          clients.
        </p>
        <p className='mb-3'>
          By the end of this course, you will be confidently implementing
          marketing strategies across the major online marketing channels. All
          the strategies, tips and tools recommended are either free or very
          cost effective.
        </p>
      </div>
      <div className='p-10 ring-1 rounded-xl h-fit '>
        <h1 className='text-[32px] pb-2'>Key Highlights</h1>
        <div className=''>
          {keyPoints.map((item, i) => (
            <div key={i} className='flex gap-5 my-2'>
              <img className='w-4 h-4' src={item.icon} alt='' />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
