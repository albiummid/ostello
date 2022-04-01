import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Ostello_logo.png'

export default function Navbar() {
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
    <div className='bg-[#7A81DC] '>
      <nav className='flex gap-[10px] items-center justify-between py-4  text-white mb-3 md:mb-0 px-10 md:px-20 '>
        <img className='md:w-[230px] w-[132px]' src={logo} alt='' />
        <div className='md:flex gap-20 hidden select-none '>
          {links.map((item, i) => (
            <Link
              to='/'
              className='cursor-pointer active:opacity-75 text-2xl active:text-[#7D23E0] hover:text-[#7D23E0]'
              key={i}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button className='bg-[#ffffff]  font-bold text-[#7D23E0] md:px-5 px-2 py-2 md:py-3 md:text-2xl text-md rounded-md active:opacity-80 w-[86px] md:w-[190px]'>
          Buy Now
        </button>
      </nav>
      <div className=' gap-[25px] flex text-lg text-white md:hidden overflow-x-scroll md:text-2xl  select-none ml-5 no-scrollbar '>
        {links.map((item, i) => (
          <Link
            to='/'
            className='cursor-pointer active:opacity-75 active:text-[#7D23E0] hover:text-[#7D23E0]'
            key={i}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
