import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseCircleOutlined,
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import VideoSection from './VideoSection'
import time from '../images/icons/time.png'
import emi from '../images/icons/emi.png'
import certified from '../images/icons/certified.png'
import { constants } from '../constants'
import toast from 'react-hot-toast'
import offlineIndicator from '../images/icons/offlineIndicator.svg'
import onlineIndicator from '../images/icons/onlineIndicator.svg'
import hybridIndicator from '../images/icons/hybridIndicator.svg'
import ModalWrapper from './Utils/Modal'

export default function Header() {
  const [isActiveHeart, setHeart] = useState(false)
  const [courseMode, setCourseMode] = useState('online')
  const [open, setOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
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
    <div name='Header' className=' '>
      <div className='bg-[#7A81DC]'>
        <div className=' px-5 container mx-auto  text-white lg:flex flex-row-reverse justify-between md:py-20'>
          <section className=' '>
            <VideoSection />
          </section>
          <div className=''>
            <section className=' my-1 cursor-pointer'>
              <div
                onClick={() =>
                  setCourseMode((prev) =>
                    prev === 'online'
                      ? 'offline'
                      : prev === 'offline'
                      ? 'hybrid'
                      : prev === 'hybrid' && 'online'
                  )
                }
                className='flex items-center font-bold space-x-2 my-1'
              >
                <img
                  src={
                    courseMode === 'online'
                      ? onlineIndicator
                      : courseMode === 'offline'
                      ? offlineIndicator
                      : hybridIndicator
                  }
                  alt=''
                />
                <p className=' uppercase md:text-xl '>{courseMode} Course</p>
              </div>
              <p className=' text-3xl md:text-5xl font-bold '>
                The Complete Digital <br /> Marketing Course
              </p>
              <p className='text-md mt-3 md:text-lg'>
                Master Digital Marketing Strategy, Social Media <br />
                Marketing,SEO,YouTube,Email,Facebook Marketing Analytics & More!
              </p>
            </section>

            <section className='statistics mt-10'>
              <div className='flex justify-between items-center'>
                <div className='info flex items-center space-x-5 '>
                  <div className=' rating flex space-x-2 justify-center items-center bg-[#FFD130] px-2  md:w-[86px] md:text-2xl text-xl rounded-lg font-bold'>
                    <p className=''>3.0</p>
                    <StarFilled />
                  </div>
                  <p className='lg:text-xl text-lg'>
                    669,534 students enrolled
                  </p>
                </div>
                <div className='actions flex gap-5 md:text-2xl'>
                  {isActiveHeart ? (
                    <HeartFilled
                      onClick={() => setHeart(!isActiveHeart)}
                      className={`flex text-xl  w-8 h-8 md:h-10 md:w-10 rounded-full shadow-sm  items-center justify-center cursor-pointer  text-red-500 ring-2 ring-white md:text-2xl `}
                    />
                  ) : (
                    <HeartOutlined
                      onClick={() => {
                        setHeart(!isActiveHeart)
                        toast.success('Added to Wishlist')
                      }}
                      className={`flex items-center text-xl  text-white   w-8 h-8 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   ring-2 ring-white md:text-2xl`}
                    />
                  )}

                  <ShareAltOutlined
                    onClick={() => setOpen(true)}
                    className='active:opacity-80 flex items-center text-xl  text-white   w-8 h-8 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   ring-2 ring-white md:text-2xl r'
                  />

                  <ModalWrapper open={open} setOpen={setOpen}>
                    <div className='bg-white flex flex-col gap-5  p-5 max-w-[400px] mx-auto rounded-lg'>
                      <div className='flex justify-between text-2xl items-center'>
                        <span className=''>Share</span>
                        <CloseCircleOutlined
                          className='cursor-pointer'
                          onClick={() => setOpen(false)}
                        />
                      </div>
                      <div className='flex justify-between gap-3'>
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
              </div>
            </section>
            <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-5 hidden md:block' />
            <section className='  md:flex justify-between pb-[100px] '>
              <div>
                <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-5  md:hidden' />
                <p className='md:text-4xl text-2xl   md:text-left '>
                  XYZ Design Academy
                </p>
                <div className='flex gap-2  '>
                  <img className=' h-6 mt-2' src={icons.location} alt='' />
                  <p className=' text-md sm:text-lg  '>
                    273/2, Shahabad Mohammadpur,
                    <br /> Vasant Kunj, New Delhi-110061
                  </p>
                </div>
              </div>
              <div className=' w-fit  px-3 py-1 border border-white rounded-md flex gap-2 h-fit justify-center items-center cursor-pointer active:opacity-75 my-5 md'>
                <p className='text-lg'>View Institute</p>

                <div className=''>
                  <ArrowRightOutlined className='text-md w-[20px] h-[20px] flex justify-center items-center ring-2 ring-white rounded-full' />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className=' xl:max-w-[1347px]  Card flex justify-evenly text-[#414141] p-10 md:p-5 rounded-3xl lg:flex-row flex-col sm:mx-auto  bg-white mx-5   lg:gap-5  shadow-xl -mt-[80px] mb-10 xl:mx-auto md:mx-10  '>
        <div className='px-2 py-1 flex flex-col items-center font-medium justify-center  '>
          <p className='text-xl lg:text-2xl font-bold  mb-3'>1 Month</p>
          <div className='flex items-center gap-1'>
            <img className='w-4' src={time} alt='' />
            <p className='text-lg '>Duration</p>
          </div>
        </div>

        <div className=' lg:hidden border-2 my-3 border-[#7A81DC] lg:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />

        <div className='px-2 py-1 flex flex-col items-center text-center font-medium   justify-center '>
          <p className='text-xl lg:text-2xl font-bold  mb-3'>
            Authorized Certificate
          </p>
          <div className='flex items-center gap-1'>
            <img className='w-4' src={certified} alt='' />
            <p className='text-lg  '>Get Certified</p>
          </div>
        </div>

        <div className=' lg:hidden border-2 my-3 border-[#7A81DC] lg:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%] ' />

        <div className='px-2 py-1 flex font-medium flex-col items-center   justify-center '>
          <p className='text-xl lg:text-2xl font-bold  mb-3'>Rs.150/month</p>
          <div className='flex items-center gap-1'>
            <img className='w-4' src={emi} alt='' />
            <p className='text-lg '>EMI Options</p>
          </div>

          <div className=' lg:hidden border-2 my-3 border-[#7A81DC] lg:border-none border-dashed border-t-0 border-l-0 border-r-0  h-2 w-[100%]  ' />
        </div>
        <div className='text-center flex items-center flex-col my-auto '>
          <p className='text-3xl font-bold text-[#414141]'>Rs. 499</p>
          <del className='text-red-400 text-xl'>Rs.1799</del>
        </div>
        <div className='flex flex-col justify-center my-5'>
          <button className=' px-10 py-3 mx-auto bg-[#7D23E0] rounded-md mb-3 text-white active:opacity-80 text-xl lg:text-2xl '>
            Buy Now
          </button>
          <div className='text-md text-center flex md-block justify-center gap-2 md-text-sm'>
            <p>
              <sup>*</sup>15-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
