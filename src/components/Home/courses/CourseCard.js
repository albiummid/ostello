import {
  ArrowRightOutlined,
  CloseCircleOutlined,
  HeartFilled,
  HeartOutlined,
  HeartTwoTone,
  RiseOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { constants } from '../../../constants'
import courseImg from '../../../images/courseImg.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import ModalWrapper from '../../Utils/Modal'

export default function CourseCard() {
  const [open, setOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [isActiveHeart, setHeart] = useState(false)
  const { icons } = constants

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (isCopied) {
        setIsCopied(false)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [isCopied])
  return (
    <div className=' max-w-[350px] relative shadow-[#7ab1dc]/20 shadow-ostf rounded-3xl '>
      <div className='relative'>
        <img src={courseImg} className='w-[100%] rounded-2xl  ' alt='' />
        <div className='flex items-center justify-center  space-x-1 px-2 text-md text-white  font-bold bg-yellow-400 rounded-lg md:hidden absolute right-5 bottom-[10px] '>
          <p>3.0</p>
          <StarFilled />
        </div>
      </div>
      <div className='flex text-xl  w-8 h-8 md:h-12 md:w-12 rounded-full shadow-sm absolute right-5 top-5  items-center justify-center cursor-pointer   ring-2 ring-white md:text-3xl bg-white'>
        {isActiveHeart ? (
          <HeartFilled
            onClick={() => setHeart(!isActiveHeart)}
            className={` text-red-500 flex items-center`}
          />
        ) : (
          <HeartOutlined
            onClick={() => setHeart(!isActiveHeart)}
            className={` text-gray-500 flex items-center `}
          />
        )}
      </div>

      <div className=' relative p-5 flex flex-col space-y-3 bg-[#fffff]'>
        <div className=' flex  justify-between '>
          <div>
            <p className='xl:text-2xl text-lg  text-[#767676]'>
              XYZ Design Academy
            </p>
            <p className='md:text-lg text-md font-bold'>UX Design Program</p>
          </div>

          <CopyToClipboard
            text='course-shared-link'
            onCopy={() => toast.success('Link has been copied to clipboard')}
          >
            <div className='p-2 w-10 h-10   rounded-full bg-white shadow-lg text-[#767676] justify-center items-center flex cursor-pointer '>
              <ShareAltOutlined className='text-2xl mb-1 mr-1' />

              <ModalWrapper open={open} setOpen={setOpen}>
                <div className='bg-white flex flex-col space-y-5  p-5 max-w-[400px] mx-auto rounded-lg'>
                  <div className='flex justify-between text-2xl items-center'>
                    <span className=''>Share</span>
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
                      value={'https://ostello.com/digital_marketing_course'}
                      className='w-full px-2 py-1 ring-1  ring-gray-400 outline-none border-none  active:outline-none active:border-none'
                    />
                    <CopyToClipboard
                      text='https://ostello.com/digital_marketing_course'
                      onCopy={() => setIsCopied(true)}
                    >
                      <button className='bg-[#7D23E0] text-white px-2 ring-1 ring-[#7D23E0] active:opacity-75 rounded-sm rounded-l-none'>
                        COPY
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </ModalWrapper>
            </div>
          </CopyToClipboard>
        </div>

        <div className='flex justify-between md:flex-col space-x-5 md:space-x-0 md:space-y-5'>
          <div className='flex items-end justify-between '>
            <div>
              <div className='flex flex-col space-y-2 font-medium text-[#767676]'>
                <div className='flex  items-center space-x-2'>
                  <img className='-mx-1' src={icons.stopwatch} alt='' />
                  <p className='text-md font-bold'>3 months</p>
                </div>
                <div className='md:flex items-center space-x-2 hidden '>
                  <RiseOutlined className='text-white bg-[#7D23E0] rounded-full p-[1px]' />

                  <p className='text-md font-bold'>
                    80+ Students joined recently
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <img src={icons.money} alt='' />
                  <p className='text-md font-bold'>EMI Available</p>
                </div>
              </div>
            </div>
            <div className='md:flex items-center justify-center  space-x-1 px-2  lg:text-xl text-white  font-bold bg-yellow-400 rounded-lg hidden '>
              <p>3.0</p>
              <StarFilled />
            </div>
          </div>

          <div className='flex justify-between items-center '>
            <div>
              <p
                className=' text-2xl
               font-semibold'
              >
                Rs. 599
              </p>
              <p className='text-md text-red-400 text-right md:text-left font-bold'>
                <del>Rs.1500</del>
              </p>
            </div>
            <div className='md:flex space-x-2 items-center text-md font-bold cursor-pointer active:opacity-75 select-none hidden'>
              <p>View Details</p>

              <ArrowRightOutlined className='h-5 w-5 flex items-center justify-center rounded-full ring-2 ring-[#7D23E0] text-[#7D23E0] text-md font-bold ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
