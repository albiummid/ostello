import {
  CloseCircleOutlined,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  LikeFilled,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons'
import { Rate } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import c1 from '../../../images/c1.png'
import c2 from '../../../images/c2.png'
import c3 from '../../../images/c3.png'
import c4 from '../../../images/c4.png'
import { BiCommentDetail } from 'react-icons/bi'
import reviewImg from '../../../images/reviewImg.png'
import bigVid from '../../../images/bigVid.png'
import bigPic from '../../../images/bigPic.png'
import { constants } from '../../../constants'
import deepika from '../../../images/deepika.png'
import tarun from '../../../images/tarun.png'
import { IoIosRocket } from 'react-icons/io'
import ModalWrapper from '../../Utils/Modal'
import MoreOption from '../../UI/MoreOption'
import { Rating } from '@mui/material'

export default function ReviewCard({
  review = {
    quotes:
      " This course is definitely above expectations so far. I didn't expect to get so much insight into the briefing and the communication between UX Designer and a client.",
    ratings: 5,
  },
}) {
  const [open, setOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isViewComment, setViewComment] = useState(false)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isSelected, setIsSelected] = useState(review.ratings)
  const [activeContent, setActiveContent] = useState({})

  const reviewClassHandler = (item) => {
    let classes =
      'shadow-lg px-2  w-fit h-fit  flex items-center space-x-1 justify-center rounded-lg cursor-pointer border border-[#D7D7D7] '
    if (isSelected === 1 && item === 1) {
      classes += 'text-white bg-red-500'
    } else if (isSelected === 2 && item <= 2) {
      classes += ' bg-red-400 border-red-400'
      if (item < 2) {
        classes += ' text-red-400'
      } else {
        classes += ' text-white'
      }
    } else if (isSelected === 3 && item <= 3) {
      if (item < 3) {
        classes += ' text-yellow-400'
      } else {
        classes += ' text-white'
      }
      classes += ' bg-yellow-400 border-yellow-400'
    } else if (isSelected === 4 && item <= 4) {
      if (item < 4) {
        classes += ' text-green-500'
      } else {
        classes += ' text-white'
      }
      classes += ' bg-green-500 border-green-500'
    } else if (isSelected === 5 && item <= 5) {
      if (item < 5) {
        classes += ' text-green-600'
      } else {
        classes += ' text-white'
      }
      classes += ' bg-green-600 border-green-600'
    } else {
      return classes
    }
    return classes
  }
  const { icons } = constants
  const contents = [
    {
      thumbnail: c1,
      url: '',
      type: 'img',
      content: bigPic,
    },
    {
      thumbnail: c2,
      url: '',
      type: 'img',
      content: bigPic,
    },
    {
      thumbnail: c3,
      url: '',
      type: 'video',
      content: bigVid,
    },
    {
      thumbnail: c4,
      url: '',
      type: 'video',
      content: bigVid,
    },
  ]
  const comments = [
    {
      userName: 'Tarun',
      userPic: tarun,
      date: Date.now(),
      comment: 'Great work Deepika, keep it up!',
    },
    {
      userName: 'Deepika',
      userPic: deepika,
      date: Date.now(),
      comment: 'Thank you, Tarun.',
    },
    {
      userName: 'Deepika',
      userPic: deepika,
      date: Date.now(),
      comment: 'Thank you, Tarun.',
    },
    {
      userName: 'Deepika',
      userPic: deepika,
      date: Date.now(),
      comment: 'Thank you, Tarun.',
    },
  ]
  return (
    <div className={`relative m-10 max-w-[600px] min-w-[300px]`}>
      <div
        className={`  shadow-[#7ab1dc]/20 shadow-xl px-6 py-4 rounded-lg flex flex-col space-y-5 l  ${
          isViewComment && 'rounded-b-none '
        }`}
        // onClick={() => setViewComment(false)}
      >
        <div className='flex md:items-center justify-between'>
          <div className='flex items-center md:space-x-5 space-x-2'>
            <img className='w-12 h-12' src={reviewImg} alt='' />

            <div className='font-semibold '>
              <h1 className='md:text-xl text-[#414141]'>Neena Sharma</h1>
              <div>
                <p className='text-md text-gray-400'>
                  {moment(Date.now()).format('MMMM , YYYY')}
                </p>
                <Rating
                  value={5}
                  disabled
                  className='text-sm md:hidden text-yellow-400'
                />
              </div>
            </div>
          </div>
          <div className='flex space-x-5 items-center'>
            <Rate
              value={5}
              disabled
              className=' md:text-md text-xs hidden md:block'
            />

            <MoreOption className={'text-xl'}>
              <div
                onClick={() => {
                  setOpen(true)
                  setActiveModal(1)
                }}
                className='flex space-x-2  items-center  hover:opacity-80 p-2 '
              >
                <EditOutlined className='flex items-center' />
                <p>Edit</p>
              </div>
              <div className='flex space-x-2 items-center  hover:opacity-80 p-2'>
                <DeleteOutlined className='flex items-center' />
                <p>Delete</p>
              </div>
            </MoreOption>
          </div>
        </div>

        <div className='flex flex-col  my-2 text-gray-500 font-medium '>
          <p className='md:text-xl text-lg'>{review.quotes}</p>
          <p className=' text-[#7D23E0] cursor-pointer  text-lg'>Show More</p>
        </div>
        <div className='flex items-center no-scrollbar space-x-2 overflow-scroll   '>
          {contents.slice(0, 5).map((item, i) => (
            <div key={i} className='relative cursor-pointer'>
              <img
                className='w-[80px]'
                onClick={() => {
                  setIsModalOpen(true)
                  setActiveContent(item)
                }}
                src={item.thumbnail}
                alt=''
              />
              {item.type === 'video' && (
                <div className='w-7 h-7 absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-full '>
                  <img
                    onClick={() => {
                      setIsModalOpen(true)
                      setActiveContent(item)
                    }}
                    src={icons.playIcon}
                    className='hover:scale-110 cursor-pointer'
                    alt=''
                  />
                </div>
              )}
              <ModalWrapper open={isModalOpen} setOpen={setIsModalOpen}>
                <div className='relative m-10 bg-white'>
                  <img
                    src={activeContent.content}
                    alt=''
                    className='h-full w-full'
                  />
                  {activeContent.type === 'video' && (
                    <div className='w-20 h-20 absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-full '>
                      <img
                        onClick={() => {
                          setIsModalOpen(true)
                          setActiveContent(item)
                        }}
                        src={icons.playIcon}
                        className='h-10  ml-2 hover:scale-110 cursor-pointer'
                        alt=''
                      />
                    </div>
                  )}

                  <CloseCircleOutlined
                    onClick={() => setIsModalOpen(false)}
                    className='text-xl text-white absolute -top-10 -right-10'
                  />
                </div>
              </ModalWrapper>
            </div>
          ))}
        </div>

        <div
          className={` flex sm:justify-center justify-between  sm:space-x-10 md:hidden text-gray-400 font-medium `}
        >
          <div
            onClick={() => setIsUpvoted((prev) => !prev)}
            className='flex space-x-2  items-center text-lg cursor-pointer w-[100px]'
          >
            {isUpvoted ? (
              <LikeFilled className='text-2xl flex items-center text-[#7D23E0]' />
            ) : (
              <LikeOutlined className='text-2xl flex items-center' />
            )}
            <span className=''>{isUpvoted ? '120K' : 'Upvote'}</span>
          </div>
          <div className='flex space-x-2  items-center text-lg cursor-pointer'>
            <ShareAltOutlined className='text-2xl flex items-center' />
            <span className=''>Share</span>
          </div>
          <div
            onClick={() => setViewComment((prev) => !prev)}
            className='  flex space-x-2  items-center text-lg cursor-pointer '
          >
            <BiCommentDetail className='text-2xl flex items-center' />
            <span className=''>{comments.length}</span>
          </div>
        </div>

        <div className='relative select-none hidden md:block '>
          <div className='  flex sm:justify-between font-semibold text-gray-400'>
            <div className='  flex sm:justify-center justify-between  sm:space-x-10'>
              <div
                onClick={() => setIsUpvoted((prev) => !prev)}
                className='flex space-x-2  items-center text-lg cursor-pointer w-[100px]'
              >
                {isUpvoted ? (
                  <LikeFilled className='text-2xl flex items-center text-[#7D23E0]' />
                ) : (
                  <LikeOutlined className='text-2xl flex items-center' />
                )}
                <span className=''>{isUpvoted ? '120K' : 'Upvote'}</span>
              </div>
              <div className='flex space-x-2  items-center text-lg cursor-pointer'>
                <ShareAltOutlined className='text-2xl flex items-center' />
                <span className=''>Share</span>
              </div>
            </div>
            <div
              onClick={() => setViewComment((prev) => !prev)}
              className='  md:flex space-x-2 text-[#7D23E0]  items-center text-lg cursor-pointer '
            >
              <BiCommentDetail className='text-2xl flex items-center' />
              <span className=''>View Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        {isViewComment && (
          <div
            className={`pb-5 space-y-5 w-full shadow-lg shadow-gray-300 px-6  rounded-lg flex flex-col bg-white z-[999] rounded-t-none md:absolute `}
          >
            <p className='sm:text-2xl text-xl'>Comments</p>
            <div className=' overflow-y-scroll no-scrollbar space-y-5 h-[250px]'>
              {comments.map((item, i) => (
                <div className='space-x-5 flex items-start font-semibold text-[#414141]'>
                  <img
                    className='sm:w-12 sm:h-12 w-8'
                    src={item.userPic}
                    alt=''
                  />

                  <div className='bg-gray-100  px-4 py-2 w-full rounded-lg'>
                    <h1 className='sm:text-xl text-sm '>{item.userName}</h1>
                    <span className='text-gray-400 sm:text-md text-xs'>
                      {moment(item.date).format('DD MMM YYYY')}
                    </span>
                    <p className='pt-2 sm:text-lg font-medium text-sm'>
                      {item.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className=' text-gray-400 text-lg font-semibold space-y-2'>
              <div className='flex space-x-5'>
                <div className='rounded-xl bg-gray-200 flex space-x-2 items-center justify-center px-2 py-1  h-fit '>
                  <div className='w-6 h-6 flex items-center justify-center bg-white rounded-full '>
                    <IoIosRocket className='text-[#7D23E0]' />
                  </div>
                  <span>120</span>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                  <BiCommentDetail className='text-xl' />
                  <span>{comments.length}</span>
                </div>
              </div>
              <div className='flex sm:space-x-5 space-x-2 border border-1 border-gray-200 md:px-5 px-2 py-2 rounded-lg text-sm sm:text-md'>
                <img
                  className='sm:w-12 sm:h-12 w-5 h-5'
                  src={comments[0].userPic}
                  alt=''
                />
                <input
                  type='text'
                  className='outline-none border-none focus:outline-none focus:border-none'
                  placeholder='Type your comment..'
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <ModalWrapper open={open} setOpen={setOpen}>
        {activeModal === 1 ? (
          <div className=' bg-white p-4 rounded-lg'>
            <div className='flex justify-between text-2xl items-center'>
              <span className=''>Edit Review</span>
              <CloseCircleOutlined
                className='cursor-pointer'
                onClick={() => setOpen(false)}
              />
            </div>
            <div className='flex space-x-2 py-5 text-[#D7D7D7] select-none  justify-center md:justify-start'>
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div
                  key={i}
                  className={reviewClassHandler(item)}
                  onClick={() => setIsSelected(item)}
                >
                  <p className='text-lg font-bold'>{item}</p>
                  <StarFilled className='text-lg mb-1' />
                </div>
              ))}
            </div>

            <div className='flex flex-col space-y-2 '>
              <p>Add Photos/videos</p>
              <div
                className='
                    w-[100%] h-[154px] md:h-[277px] border border-gray-400 flex items-center justify-center rounded-md cursor-pointer
                    '
              >
                <img
                  className='w-[30px] h-[30px] '
                  src={icons.imgProto}
                  alt=''
                />
              </div>
              <div className='flex h-[93px] p-2 space-x-2 border border-gray-400 rounded-md'>
                <img className='w-[25px] h-[25px] ' src={icons.user} alt='' />
                <textarea
                  defaultValue={review.quotes}
                  onChange={(e) => (review.quotes = e.target.value)}
                  placeholder='Write your Review'
                  className='border-none outline-none active:outline-none active:border-none w-full resize-none'
                />
              </div>
              <button
                onClick={() => setActiveModal(2)}
                className='font-lg px-2 py-1 ml-auto  text-white bg-[#7D23E0] rounded-sm active:opacity-75'
              >
                Update Review
              </button>
            </div>
          </div>
        ) : activeModal === 2 ? (
          <div className='bg-white  flex flex-col items-center md:gap-10 space-y-5 md:space-y-0 md:w-[400px] mx-auto  p-8 rounded-xl'>
            <p className='md:text-2xl text-xl text-center'>
              <span className='text-[#7D23E0]'>Updating</span> the review done !
            </p>
            <button
              className='bg-[#7D23E0] text-white md:text-xl text-lg rounded-md px-5 py-1'
              onClick={() => {
                setOpen(false)
                setActiveModal(0)
              }}
            >
              Close
            </button>
          </div>
        ) : null}
      </ModalWrapper>
    </div>
  )
}
