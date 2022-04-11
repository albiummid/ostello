import {
  CloseOutlined,
  FileOutlined,
  FormOutlined,
  HeartOutlined,
  HomeOutlined,
  IdcardOutlined,
  ImportOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  StarOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Affix } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll/modules'
import { constants } from '../../constants'
import logo from '../../images/logo.svg'
import logoWH from '../../images/logoWhiteBG.svg'

export default function Navbar() {
  const { icons } = constants
  const [isAffixed, setIsAffixed] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const iconStyle = `flex items-center text-2xl `
  const navigate = useNavigate()

  const links = [
    {
      title: 'Overview',
      icon: <UnorderedListOutlined className={iconStyle} />,
    },
    {
      title: 'Objectives',
      icon: <FormOutlined className={iconStyle} />,
    },
    {
      title: 'Syllabus',
      icon: <FileOutlined className={iconStyle} />,
    },
    {
      title: 'Faculty',
      icon: <IdcardOutlined className={iconStyle} />,
    },
    {
      title: 'Reviews',
      icon: <StarOutlined className={iconStyle} />,
    },
    {
      title: 'FAQ',
      icon: <QuestionCircleOutlined className={iconStyle} />,
    },
  ]

  return (
    <div className=''>
      <Affix offsetTop={0} onChange={(e) => setIsAffixed(e)} className=''>
        <div
          className={
            isAffixed ? 'py-1 relative bg-white ' : 'py-1 bg-[#7A81DC] relative'
          }
        >
          <>
            <div
              className={` absolute  inset-0 w-[85%] h-screen rounded-r-2xl px-5 py-10 flex flex-col justify-around bg-[#ffffff]  md:hidden   z-[999] ease-in-out transition-all duration-300 shadow-2xl  ${
                isActive ? '-translate-x-0' : '-translate-x-full'
              } `}
            >
              <div className='flex justify-between items-center'>
                <img
                  onClick={() => navigate('/')}
                  className={`w-40 md:hidden `}
                  src={logoWH}
                  alt=''
                />
                <CloseOutlined
                  className='text-2xl flex items-center'
                  onClick={() => setIsActive(false)}
                />
              </div>
              <div className='ml-5 '>
                {links.map((item, i) => (
                  <div
                    key={i}
                    className={`flex   space-x-5  items-center py-2 cursor-pointer text-lg font-medium my-2  active:text-[#7D23E0] `}
                  >
                    <span
                      className={`${
                        i === activeSection
                          ? ' text-[#7D23E0]'
                          : 'text-[#414141]'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <Link
                      onClick={() => setIsActive(!isActive)}
                      to={item.title}
                      smooth={true}
                      spy={true}
                      className={`${
                        i === activeSection
                          ? ' text-[#7D23E0]'
                          : 'text-[#414141]'
                      }`}
                      activeClass=''
                      key={i}
                      onSetActive={(e) => {
                        setActiveSection(i)
                      }}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <div
                  className={`flex ml-5   space-x-5  items-center py-2 cursor-pointer text-lg  my-5  active:text-[#7D23E0]`}
                >
                  <span className='text-[#414141]'>
                    <ImportOutlined className={iconStyle} />
                  </span>
                  <Link to={'/login'} smooth={true} spy={true} activeClass=''>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </>

          <div className={isAffixed ? 'bg-white  ' : 'bg-[#7A81DC]'}>
            <nav
              className={`relative container mx-auto flex md:space-x-5 items-center justify-between   py-2 px-5 md:px-10   md:flex `}
            >
              <img
                onClick={() => navigate('/')}
                className={`w-32  md:w-40 xl:w-40 hidden sm:block `}
                src={isAffixed ? logoWH : logo}
                alt=''
              />
              <MenuOutlined
                onClick={() => setIsActive(true)}
                className={`text-2xl flex items-center sm:hidden ${
                  isAffixed ? 'text-[#7d23e0]' : 'text-white'
                }`}
              />

              <div className='md:flex items-center w-full justify-evenly  hidden select-none '>
                {links.map((item, i) => (
                  <div
                    key={i}
                    className='flex flex-col justify-center items-center py-2  '
                  >
                    <Link
                      to={item.title}
                      smooth={true}
                      spy={true}
                      className={`cursor-pointer text-md xl:text-xl   active:text-[#7D23E0] mx-2 ${
                        i === activeSection
                          ? ' text-[#7D23E0]'
                          : isAffixed
                          ? 'text-[#414141]'
                          : 'text-white'
                      }`}
                      key={i}
                      onSetActive={(e) => {
                        setActiveSection(i)
                      }}
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
                className={`  font-medium   lg:text-xl md:px-8 px-4 md:py-2 py-1  md:text-lg rounded-md active:opacity-80 ${
                  isAffixed
                    ? 'bg-[#7D23E0] text-[#ffffff]'
                    : 'text-[#7D23E0] bg-[#ffffff]'
                }`}
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </Affix>
    </div>
  )
}
