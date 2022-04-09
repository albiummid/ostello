import { CloseCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { constants } from '../../constants'
import ModalWrapper from '../Utils/Modal'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Container from '../Layout/Container'
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
      <div className='shareBG '>
        <Container
          className={
            'flex md:justify-between md:items-center flex-col justify-center items-center space-y-10  md:flex-row md:px-20 h-full'
          }
        >
          <h1 className='text-white font-medium text-center  md:text-4xl text-2xl '>
            Share this course and <br /> receive exciting offers
          </h1>
          <button
            onClick={() => setOpen(true)}
            className='px-6 py-2 text-xl lg:text-2xl w-fit  text-[#7D23E0]  bg-[#ffff] rounded-lg font-medium active:opacity-80'
          >
            Sign up and Refer
          </button>
        </Container>
      </div>
    </>
  )
}
