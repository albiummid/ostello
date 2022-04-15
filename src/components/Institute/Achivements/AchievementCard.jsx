import React from 'react'
import moment from 'moment'
import { IoIosRocket } from 'react-icons/io'
import deepikaImg from '../../../images/deepika.png'
import tarunImg from '../../../images/tarun.png'
import coverImg from '../../../images/achImg.png'
import { Divider } from 'antd'
import { BiCommentDetail, BiComment, BiShareAlt } from 'react-icons/bi'
export default function AchievementCard() {
  const cardData = {
    coverImg: coverImg,
    instituteName: 'Allen Institute',
    date: moment(Date.now()).format('DD MMMM YYYY'),
    postText:
      'The Institute is in parallel with Indian values, spiritualism & hard work under the efficient directions of Shri Govind Maheshwari, S',
    comments: [
      {
        userName: 'Tarun',
        userImg: tarunImg,
        date: moment(Date.now()).format('dd MMMM YYYY'),
        comment: 'Great work Deepika, keep it up!',
      },
      {
        userName: 'Deepika',
        userImg: deepikaImg,
        date: moment(Date.now()).format('dd MMMM YYYY'),
        comment: 'Thank you Tarun, continue inspiring!',
      },
      {
        userName: 'Tarun',
        userImg: tarunImg,
        date: moment(Date.now()).format('dd MMMM YYYY'),
        comment: 'Great work Deepika, keep it up!',
      },
      {
        userName: 'Deepika',
        userImg: deepikaImg,
        date: moment(Date.now()).format('dd MMMM YYYY'),
        comment: 'Thank you Tarun, continue inspiring!',
      },
      {
        userName: 'Tarun',
        userImg: tarunImg,
        date: moment(Date.now()).format('dd MMMM YYYY'),
        comment: 'Great work Deepika, keep it up!',
      },
      {
        userName: 'Deepika',
        userImg: deepikaImg,
        date: moment(Date.now()).format('dd MMMM YYYY'),
        comment: 'Thank you Tarun, continue inspiring!',
      },
    ],
  }
  return (
    <div className='py-5'>
      <div className='max-w-[1200px] lg:mx-auto text-[#424242]  bg-white flex flex-wrap lg:flex-nowrap rounded-2xl s justify-center my-5 mx-5 relative'>
        <img
          className='md:w-5/12 hidden lg:block rounded-2xl  object-cover '
          src={cardData.coverImg}
          alt=''
        />
        <img
          className='rounded-2xl lg:hidden h-[250px] object-center w-full object-cover '
          src={cardData.coverImg}
          alt=''
        />
        <div className='absolute top-5 right-5 h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-md shadow-current cursor-pointer active:opacity-75 lg:hidden'>
          <BiShareAlt className='text-3xl p-1' />
        </div>

        <div>
          <div className='px-5 py-3 font-medium space-y-2 lg:mr-20'>
            <div className=' '>
              <h1 className=' text-3xl'>{cardData.instituteName}</h1>
              <p className='text-md  text-gray-400'>{cardData.date}</p>
            </div>
            <p className='sm:text-lg'>{cardData.postText}</p>
          </div>
          <div className='px-5 lg:mr-20'>
            <Divider type='horizontal' className=' bg-gray-200' />
          </div>
          <div>
            <div
              className={`pb-5 space-y-5 w-full  px-6  rounded-lg flex flex-col bg-white z-[999] rounded-t-none  `}
            >
              <p className=' md:text-xl font-bold'>
                Comments{' '}
                <span className='lg:hidden'>({cardData.comments.length})</span>
                <span className=' float-right lg:hidden'>view all</span>
              </p>

              <div className=' overflow-y-scroll no-scrollbar space-y-5 h-[250px] lg:mr-20'>
                {cardData.comments.map((item, i) => (
                  <div className='space-x-5 flex items-start font-semibold text-[#414141] '>
                    <img
                      className='sm:w-12 sm:h-12 w-8 '
                      src={item.userImg}
                      alt=''
                    />

                    <div className='bg-gray-100 py-2  px-4  w-full rounded-lg'>
                      <h1 className='sm:text-lg text-sm '>{item.userName}</h1>
                      <span className='text-gray-400 sm:text-md text-xs'>
                        {moment(item.date).format('DD MMM YYYY')}
                      </span>
                      <p className='pt-1  text-sm'>{item.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className=' text-gray-600 text-lg font-semibold space-y-2'>
                <div className='flex items-center justify-between'>
                  <div className='flex space-x-5'>
                    <div className='rounded-xl bg-gray-200 flex space-x-2 items-center justify-center px-2 py-1  h-fit '>
                      <div className='w-6 h-6 flex items-center justify-center bg-white rounded-full '>
                        <IoIosRocket className='text-[#7D23E0]' />
                      </div>
                      <span>120</span>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                      <BiComment className='text-xl' />
                      <span>{cardData.comments.length}</span>
                    </div>
                  </div>
                  <BiShareAlt className='text-3xl hidden lg:block' />
                </div>
                <div className='flex sm:space-x-5 space-x-2 border border-1 border-gray-200 md:px-5 px-2 py-3  rounded-lg text-sm sm:text-md'>
                  <img
                    className='sm:w-12 sm:h-12 w-8 h-8'
                    src={cardData.comments[0].userImg}
                    alt=''
                  />
                  <input
                    type='text'
                    className='outline-none border-none focus:outline-none text-md focus:border-none font-medium w-full'
                    placeholder='Type your comment..'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}