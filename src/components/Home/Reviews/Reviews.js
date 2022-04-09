import {
  CloseCircleOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons'
import { Box, LinearProgress } from '@mui/material'
import { Progress, Rate } from 'antd'
import { Circle, Line } from 'rc-progress'
import React, { useState } from 'react'
import { constants } from '../../../constants'
import Container from '../../Layout/Container'
import Modal from '../../Utils/Modal'
import ReviewCard from './ReviewCard'

export default function Reviews() {
  const [isSelected, setIsSelected] = useState(0)
  const [open, setOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(0)

  const progresses = [
    {
      percentage: 69,
    },
    {
      percentage: 60,
    },
    {
      percentage: 50,
    },
    {
      percentage: 40,
    },
    {
      percentage: 30,
    },
  ]

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

  return (
    <section name='Reviews' className='py-20   '>
      <Container>
        <h1 className='lg:text-5xl text-4xl text-center my-10 font-medium'>
          Reviews
        </h1>
        <div className=''>
          <div className=' flex justify-center items-center flex-col md:flex-row md:justify-between md:space-x-5 space-y-5 '>
            <div className='flex space-x-2 '>
              {/* Review Statistics */}
              <div className='text-center flex md:justify-center items-center flex-col  my-5 '>
                <p className='md:text-5xl text-3xl my-0 font-medium  md:font-bold '>
                  3.9
                </p>
                <Rate className='text-sm lg:text-xl' value={5} />
                <p className='md:text-xl text-md font-bold m-0 p-0'>
                  Course Rating
                </p>
              </div>

              <div className='md:w-full'>
                {progresses.map((item, i) => (
                  <div className='flex items-center gap-2 my-1'>
                    <Progress
                      strokeColor='#7D23E0'
                      strokeWidth={10}
                      className='text-xs lg:text-lg w-[800px]   hidden md:block'
                      percent={item.percentage}
                      showInfo={false}
                    />
                    <Progress
                      strokeColor='#7D23E0'
                      strokeWidth={5}
                      className=' text-xs lg:text-lg w-[100px]  md:hidden'
                      percent={item.percentage}
                      showInfo={false}
                    />

                    <Rate className='text-xs md:text-lg flex ' value={5 - i} />

                    <p className='w-[50px] text-lg font-bold hidden lg:block ml-3'>
                      {item.percentage}%
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='md:px-10 px-2 py-4 rounded-lg shadow-md flex flex-col space-y-2 bg-white mx-2 '>
              <p className='text-2xl text-center my-2 font-medium'>
                Rate your experience
              </p>
              <div className='flex justify-center space-x-2 py-5 text-[#D7D7D7] select-none'>
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
              <p
                className={`text-lg ml-4 font-medium text-[#7D23E0] cursor-pointer  `}
                onClick={() => {
                  setOpen(true)
                  setActiveModal(1)
                }}
              >
                Write a Review
              </p>
              <div>
                <Modal open={open} setOpen={setOpen}>
                  {activeModal === 1 ? (
                    <div className=' bg-white p-4 rounded-lg'>
                      <div className='flex justify-between text-2xl items-center'>
                        <span className=''>Add Review</span>
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
                          <img
                            className='w-[25px] h-[25px] '
                            src={icons.user}
                            alt=''
                          />
                          <textarea
                            placeholder='Write your Review'
                            className='border-none outline-none active:outline-none active:border-none w-full resize-none'
                          />
                        </div>
                        <button
                          onClick={() => setActiveModal(2)}
                          className='font-lg px-2 py-1 ml-auto  text-white bg-[#7D23E0] rounded-sm active:opacity-75'
                        >
                          Add Review
                        </button>
                      </div>
                    </div>
                  ) : activeModal === 2 ? (
                    <div className='bg-white  flex flex-col items-center md:space-x-10 space-y-5 md:w-[400px] mx-auto  p-8 rounded-xl'>
                      <p className='md:text-3xl text-xl text-center'>
                        <span className='text-[#7D23E0]'>Thanks</span> for
                        giving your opinion. It matters to us!
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
                </Modal>
              </div>
            </div>
          </div>
          {/* <div>
            <ReviewCard />
            <ReviewCard />
          </div> */}
        </div>
      </Container>
    </section>
  )
}
