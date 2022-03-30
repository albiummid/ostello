import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
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
    <div>
      <Container>
        <div className='bg-[#F3F5F7] py-10'>
          <h1 className='text-5xl text-center py-10 bg-[#F3F5F7]'>
            Frequently Asked Questions
          </h1>
          <div className=' md:w-[70%] mx-auto py-5 '>
            {data.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col gap-2 my-2'
                onClick={() => setActiveKey(idx)}
              >
                <div className='py-4 px-5 flex items-center justify-between bg-[#7A81DC] rounded-xl text-white'>
                  <p className=''>{item.section}</p>
                  {activeKey === idx ? <CloseOutlined /> : <PlusOutlined />}
                </div>
                <div className={activeKey === idx ? 'block' : 'hidden'}>
                  {item.faqs.map((item, i) => (
                    <div
                      key={i + 100}
                      className='ring-2 rounded-xl my-2 py-4 px-5'
                    >
                      <p className='font-bold'>{item.question}</p>
                      <p className='text-sm'> {item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
