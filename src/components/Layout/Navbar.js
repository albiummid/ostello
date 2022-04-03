import { Affix } from 'antd'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-scroll/modules'
import logo from '../../images/logo.svg'
import logoWH from '../../images/logoWhiteBG.svg'

export default function Navbar() {
  const [isAffixed, setIsAffixed] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const links = [
    {
      title: 'Overview',
    },
    {
      title: 'Objectives',
    },
    {
      title: 'Syllabus',
    },
    {
      title: 'Faculty',
    },
    {
      title: 'Reviews',
    },
    {
      title: 'FAQ',
    },
  ]
  return (
    <div name='' className=' '>
      <Affix offsetTop={0} className='' onChange={(e) => setIsAffixed(e)}>
        <nav
          className={`flex gap-[10px] items-center justify-between py-4  pb-3 md:mb-0 px-5 lg:px-20 xl:px-40  ${
            isAffixed ? 'bg-white hidden md:flex items-center ' : 'bg-[#7A81DC]'
          }`}
        >
          <img
            className={`md:w-[230px] w-[132px] `}
            src={isAffixed ? logoWH : logo}
            alt=''
          />

          <div className='md:flex items-center justify-between  hidden select-none w-[60%]'>
            {links.map((item, i) => (
              <div className='flex flex-col justify-center items-center py-2  '>
                <Link
                  to={item.title}
                  smooth={true}
                  spy={true}
                  className={`cursor-pointer text-xl  active:text-[#7D23E0] ${
                    i === activeSection
                      ? ' text-[#7D23E0]'
                      : isAffixed
                      ? 'text-[#414141]'
                      : 'text-white'
                  }`}
                  activeClass=''
                  key={i}
                  onSetActive={() => setActiveSection(i)}
                >
                  {item.title}
                </Link>
                <div
                  className={
                    ' h-1 w-[50%] rounded-lg   ' +
                    (i !== activeSection
                      ? 'bg-["transparent"] '
                      : 'bg-[#7D23E0]')
                  }
                />
              </div>
            ))}
          </div>

          <button
            className={`  font-medium  xl:px-3 px-6 py-1  md:py-3  md:text-lg xl:text-2xl text-md rounded-md active:opacity-80 md:w-[110px] xl:w-[190px] ${
              isAffixed
                ? 'bg-[#7D23E0] text-[#ffffff]'
                : 'text-[#7D23E0] bg-[#ffffff]'
            }`}
          >
            Login
          </button>
        </nav>
      </Affix>

      <Affix
        offsetTop={0}
        className='bg-[#7A81DC]'
        onChange={(e) => setIsAffixed(e)}
      >
        <div
          className={
            ' gap-[25px] flex text-lg lg:text-lg  font-medium md:hidden overflow-x-scroll md:text-2xl  select-none no-scrollbar px-2  ' +
            (isAffixed && 'bg-white ')
          }
        >
          {links.map((item, i) => (
            <div className='flex flex-col items-center py-2 '>
              <Link
                to={item.title}
                smooth={true}
                spy={true}
                className={`cursor-pointer  active:text-[#7D23E0] ${
                  i === activeSection
                    ? ' text-[#7D23E0]'
                    : isAffixed
                    ? 'text-[#414141]'
                    : 'text-white'
                }`}
                activeClass=''
                key={i}
                onSetActive={() => setActiveSection(i)}
              >
                {item.title}
              </Link>
              <div
                className={
                  ' bg-[#7D23E0] h-1 w-[50%] rounded-lg ' +
                  (i !== activeSection && 'hidden')
                }
              />
            </div>
          ))}
        </div>
      </Affix>
    </div>
  )
}
