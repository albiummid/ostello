import { CloseCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { constants } from '../../constants'
import ModalWrapper from '../Utils/Modal'
import { CopyToClipboard } from 'react-copy-to-clipboard'
export default function ShareCourse() {
  const [open, setOpen] = useState(false)
  const { icons } = constants
  const [isCopied, setIsCopied] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      if (isCopied) {
        setIsCopied(false)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [isCopied])

  const socialLinks = [
    {
      title: 'instagram',
      url: 'https://instagram.com',
      icon: icons.instaViolet,
    },
    {
      title: 'fb',
      url: 'https://fb.com',
      icon: icons.fbViolet,
    },
    {
      title: 'whatsapp',
      url: 'https://whatsapp.com',
      icon: icons.whatsappViolet,
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com',
      icon: icons.linkedinViolet,
    },
    {
      title: 'twitter',
      url: 'https://twitter.com',
      icon: icons.twitterViolet,
    },
  ]

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <div className='bg-white flex flex-col space-y-5  p-5 max-w-[400px] mx-auto rounded-lg'>
          <div className='flex justify-between text-2xl items-center'>
            <span className=''>Referral</span>
            <CloseCircleOutlined
              className='cursor-pointer'
              onClick={() => setOpen(false)}
            />
          </div>
          <div className='flex justify-between space-x-3'>
            {socialLinks.map((item, i) => (
              <a
                className='block ring-1 ring-gray-400 p-3 rounded-xl'
                href={item.url}
                key={i}
              >
                <img className='w-10' src={item.icon} alt='' />
              </a>
            ))}
          </div>

          <div className=' flex justify-center w-full relative'>
            <p
              className={`absolute px-3 py-1  -top-10 right-0 bg-gray-300 rounded-lg ${
                isCopied ? 'block' : 'hidden'
              }`}
            >
              Copied
            </p>
            <input
              type='text  '
              value={'EHDOSB261'}
              className='w-full px-2 py-1 ring-1  ring-gray-400 outline-none border-none  active:outline-none active:border-none'
            />
            <CopyToClipboard text='EHDOSB261' onCopy={() => setIsCopied(true)}>
              <button className='bg-[#7D23E0] text-white px-2 ring-1 ring-[#7D23E0] active:opacity-75 rounded-sm rounded-l-none'>
                COPY
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </ModalWrapper>
      <div className='shareBG flex lg:justify-between lg:items-center flex-col justify-center space-y-10 lg:space-x-10 lg:flex-row '>
        <div className='text-white w-[50%] lg:ml-60 mx-auto hidden font-medium lg:block'>
          <h1 className='text-white  text-5xl mb-5'>Share this course and</h1>
          <h1 className='text-white text-5xl'>receive exciting offers.</h1>
        </div>
        <h1 className='text-white font-medium text-center lg:ml-20 text-3xl lg:hidden'>
          Share this course and receive exciting offers
        </h1>
        <button
          onClick={() => setOpen(true)}
          className='px-8 py-4 text-xl lg:text-2xl w-fit mx-auto text-[#7D23E0]  bg-[#ffff] rounded-lg font-medium active:opacity-80'
        >
          Sign up and Refer
        </button>
      </div>
    </>
  )
}
