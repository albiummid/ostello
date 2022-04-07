import {
  HeartOutlined,
  HomeOutlined,
  ImportOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Affix } from 'antd'
import React, { useState } from 'react'

export default function BottomBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const activeUrl = '/'
  const navIconClasses = `
    
   text-xl
  `
  const bottomNavs = [
    {
      title: 'Home',
      url: '/',
      icon: <HomeOutlined className={navIconClasses} />,
    },
    {
      title: 'Wishlist',
      url: '/wishlist',
      icon: <HeartOutlined className={navIconClasses} />,
    },
    {
      title: 'Invite & Earn',
      url: '/inviteAndEarn',
      icon: <UserAddOutlined className={navIconClasses} />,
    },
    {
      title: 'Account',
      url: '/account',
      icon: (
        <UserOutlined
          className={navIconClasses}
          onClick={() => setIsLoggedIn(false)}
        />
      ),
    },
    {
      title: 'Login',
      url: '/login',
      icon: (
        <ImportOutlined
          className={navIconClasses}
          onClick={() => setIsLoggedIn(true)}
        />
      ),
    },
  ]

  return (
    <div className='sm:hidden'>
      <Affix offsetBottom={0} className=' '>
        <div className='bg-white  flex justify-around'>
          {bottomNavs.map((item, i) => (
            <div
              key={i}
              className={` flex items-center justify-center flex-col mx-2 font-medium  ${
                activeUrl === item.url ? 'text-[#7D23E0]' : 'text-gray-400'
              } ${item.title === 'Account' && !isLoggedIn && 'hidden'} ${
                item.title === 'Login' && isLoggedIn && 'hidden'
              }`}
            >
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </Affix>
    </div>
  )
}
