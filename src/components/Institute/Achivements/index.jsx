import React, { useRef } from 'react'
import AchievementCard from './AchievementCard'

import Carousel from 'react-elastic-carousel'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import useScreenWidth from '../../../hooks/useScreenWidth'

export default function Achievements() {
  const carouselRef = useRef({})
  console.log(carouselRef)
  const screenSize = useScreenWidth()
  console.log(screenSize)
  return (
    <div name='Achievements' className='py-20 bg-[#424242]'>
      <div className='container mx-auto'>
        <h1 className='text-4xl py-10 text-center text-white'>Achievements</h1>
        <div>
          <div className=''>
            <Carousel
              renderArrow={({ onClick, type, isEdge }) => {
                return (
                  <div className='my-auto hidden md:block'>
                    {type === 'PREV' ? (
                      <LeftOutlined
                        onClick={() => carouselRef.current.slidePrev()}
                        className='text-[#7A81DC] text-3xl bg-white flex items-center justify-center h-16 w-16 rounded-full cursor-pointer mr-5'
                      />
                    ) : (
                      <RightOutlined
                        onClick={() => carouselRef.current.slideNext()}
                        className='text-[#7A81DC] text-3xl bg-white flex items-center justify-center h-16 w-16 rounded-full cursor-pointer ml-5'
                      />
                    )}
                  </div>
                )
              }}
              showArrows={screenSize !== 'sm'}
              ne
              ref={carouselRef}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <div className='flex items-center space-x-2'>
                    <LeftOutlined
                      onClick={() => carouselRef.current.slidePrev()}
                      className='text-[#7A81DC] text-xl bg-white flex items-center justify-center h-10 w-10 rounded-full cursor-pointer mr-2 md:hidden'
                    />
                    {pages.map((page) => {
                      const isActivePage = activePage === page
                      return (
                        <div
                          className={`cursor-pointer  h-2 rounded-lg  ${
                            isActivePage ? 'bg-white w-12 ' : 'bg-gray-500 w-6'
                          }`}
                          key={page}
                          onClick={() => onClick(page)}
                          active={isActivePage}
                        />
                      )
                    })}
                    <RightOutlined
                      onClick={() => carouselRef.current.slideNext()}
                      className='text-[#7A81DC] text-xl bg-white flex items-center justify-center h-10 w-10 rounded-full cursor-pointer ml-2 md:hidden'
                    />
                  </div>
                )
              }}
            >
              <AchievementCard />
              <AchievementCard />
              <AchievementCard />
              <AchievementCard />
              <AchievementCard />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
