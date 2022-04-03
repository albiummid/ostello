import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Layout/Container'

export default function FAQ() {
  const [activeKey, setActiveKey] = useState(0)
  const data = [
    {
      section: 'Payment',
      faqs: [
        {
          question: 'What card options do I have for the payment?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question: 'What are the EMI options available?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question:
            'I have another payment issue,where will I get the information?',
          answer: 'Please visit the help center to confirm all your queries',
        },
      ],
    },
    {
      section: 'Completion',
      faqs: [
        {
          question: 'What card options do I have for the payment?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question: 'What are the EMI options available?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question:
            'I have another payment issue,where will I get the information?',
          answer: 'Please visit the help center to confirm all your queries',
        },
      ],
    },
    {
      section: 'Projects',
      faqs: [
        {
          question: 'What card options do I have for the payment?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question: 'What are the EMI options available?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question:
            'I have another payment issue,where will I get the information?',
          answer: 'Please visit the help center to confirm all your queries',
        },
      ],
    },
    {
      section: 'Mentorship',
      faqs: [
        {
          question: 'What card options do I have for the payment?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question: 'What are the EMI options available?',
          answer:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown pr',
        },
        {
          question:
            'I have another payment issue,where will I get the information?',
          answer: 'Please visit the help center to confirm all your queries',
        },
      ],
    },
  ]
  return (
    <div name='FAQ'>
      <Container>
        <div className='bg-[#F3F5F7] lg:py-20 py-10 cursor-pointer px-5'>
          <h1 className=' hidden md:block text-5xl text-center py-10 pb-20 font-bold bg-[#F3F5F7]'>
            Frequently Asked Questions
          </h1>
          <h1 className='lg:text-5xl text-4xl md:hidden text-center py-10 font-medium  bg-[#F3F5F7] '>
            FAQs
          </h1>
          <div className=' md:w-[70%] mx-auto py-5 max-w-[1080px]'>
            {data.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col gap-2 my-2'
                onClick={() => setActiveKey(idx)}
              >
                <div className='md:p-10 p-5  flex items-center justify-between bg-[#7A81DC] rounded-xl text-xl text-white  '>
                  <p className='text-2xl'>{item.section}</p>
                  {activeKey === idx ? (
                    <CloseOutlined className='mr-5 font-bold ' />
                  ) : (
                    <PlusOutlined className='mr-5 font-bold ' />
                  )}
                </div>
                <div className={activeKey === idx ? 'block mb-5 ' : 'hidden '}>
                  {item.faqs.map((item, i) => (
                    <div
                      key={i + 100}
                      className='ring-2 ring-[#7A81DC] rounded-xl mb-4 py-4 px-5 text-[#616161]  text-xl '
                    >
                      <p className='font-bold md:pl-10 mb-5'>{item.question}</p>
                      <p className=' md:pl-10'> {item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className=' flex items-center md:gap-4 md:justify-end justify-center flex-col md:flex-row '>
              <p className='text-xl'>Or visit our help center to know more</p>
              <Link
                to='/'
                className='font-bold text-[#0026AE] underline text-lg'
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
