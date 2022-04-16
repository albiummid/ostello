import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  ArrowRightOutlined,
  CloseCircleOutlined,
  HeartFilled,
  HeartOutlined,
  PlayCircleFilled,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'

import { constants } from '../../constants'
import toast from 'react-hot-toast'
import offlineIndicator from '../../images/icons/offlineIndicator.svg'
import onlineIndicator from '../../images/icons/onlineIndicator.svg'
import hybridIndicator from '../../images/icons/hybridIndicator.svg'
import ModalWrapper from '../Utils/Modal'
import OstelloCarousel from '../Utils/OstelloCarousel'
import Carousel from 'react-elastic-carousel'
import videoImage from '../../images/videoImg.png'
import { Link, useNavigate } from 'react-router-dom'

export default function InstituteHeader() {
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
  const navigate = useNavigate()

  return (
    <div name='Header' className=' '>
      <div className='bg-[#282828] py-5 md:py-20 '>
        <div className=' px-3 sm:px-20 container mx-auto  text-white lg:flex items-center flex-row-reverse justify-between'>
          <section className='lg:w-[400px] 2xl:w-[700px]  '>
            <Carousel
              itemsToShow={1}
              showArrows={false}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className='flex items-center space-x-2 mt-2'>
                    {pages.map((page) => {
                      const isActivePage = activePage === page
                      return (
                        <div
                          className={`cursor-pointer  h-2 rounded-lg  ${
                            isActivePage ? 'bg-white w-28 ' : 'bg-gray-400 w-6'
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                          active={isActivePage}
                        />
                      )
                    })}
                  </div>
                )
              }}
            >
              {[1, 2, 3, 4].map((item, i) => (
                <div key={i} className='video_container   mx-2'>
                  <div className='relative'>
                    <img
                      src={videoImage}
                      className=' w-full xl:w-[700px] '
                      alt=''
                    />
                    <PlayCircleFilled className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl  text-5xl cursor-pointer active:opacity-75' />
                    <div className=' group absolute top-5 right-5 md:top-10 md:right-10 p-3 bg-white flex rounded-lg gap-2 transition-all ease-in-out duration-300  cursor-pointer'>
                      <img src={icons.imgProto} className='' alt='' />
                      <p
                        onClick={() => navigate('/details')}
                        className='text-[#414141] hidden group-hover:block   '
                      >
                        See more
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
          <div className=''>
            <section className=' my-1 cursor-pointer  '>
              {/* <div
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
                <p className=' uppercase xl:text-xl '>{courseMode} Course</p>
              </div> */}
              <div className=' text-3xl xl:text-6xl lg:text-4xl flex flex-col  font-semibold md:space-y-5'>
                <span>Alien Institute For</span>
                <span> NEET And JEE</span>
              </div>
              <p className='text-sm mt-3 xl:text-lg text-[#d8d8d8]'>
                Hybrid . Offline Timings : 11:30 AM to 9:30 PM{' '}
              </p>
            </section>
            <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-5 hidden md:block' />

            <section className='  md:flex justify-between  text-[#d8d8d8] '>
              <div className=' flex flex-col gap-2'>
                <div className='border-b-0 border-l-0 border-r-0 border-2 border-dashed w-full my-2  md:hidden' />
                <div className='flex space-x-2  '>
                  <img className=' md:h-8 mt-2' src={icons.location} alt='' />
                  <p className=' md:text-lg  '>
                    273/2, Shahabad Mohammadpur, Vasant <br /> Kunj, New
                    Delhi-110061
                  </p>
                </div>
              </div>
            </section>

            <section className='statistics mt-10 xl:mb-8 mb-4 '>
              <>
                <div className='info flex items-center sm:justify-between  space-x-5 '>
                  <div className='flex space-x-2 items-center'>
                    <div className=' rating flex xl:space-x-2 justify-between items-center bg-[#FFD130] px-2 py-1  md:text-xl text-sm rounded-md font-bold'>
                      <p className=''>3.0</p>
                      <StarFilled />
                    </div>
                    <p className=' md:text-lg text-[#d8d8d8]'>
                      669,534 students enrolled
                    </p>
                  </div>
                  <div className='actions flex space-x-5 md:text-2xl'>
                    {isActiveHeart ? (
                      <HeartFilled
                        onClick={() => setHeart(!isActiveHeart)}
                        className={`flex   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm  items-center justify-center cursor-pointer  text-red-500 md:ring-2 ring-1 ring-white text-sm md:text-2xl `}
                      />
                    ) : (
                      <HeartOutlined
                        onClick={() => {
                          setHeart(!isActiveHeart)
                          toast.success('Added to Wishlist')
                        }}
                        className={`flex items-center text-sm  text-white   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   md:ring-2 ring-1 ring-white md:text-2xl`}
                      />
                    )}

                    <ShareAltOutlined
                      onClick={() => setOpen(true)}
                      className='active:opacity-80 flex items-center text-sm  text-white   w-6 h-6 md:h-10 md:w-10 rounded-full shadow-sm justify-center cursor-pointer   md:ring-2 ring-1 ring-white md:text-2xl r'
                    />

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
                            value={
                              'https://ostello.com/digital_marketing_course'
                            }
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
              </>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
