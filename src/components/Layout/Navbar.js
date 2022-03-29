import React from 'react'
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
    <div className='bg-[#7A81DC]'>
      <nav className='flex gap-[10px] items-center justify-between py-2 px-2  text-white max-w-7xl mx-auto'>
        <img className='w-[150px]' src={logo} alt='' />
        <div className='md:flex gap-[25px] hidden '>
          {links.map((item, i) => (
            <p className='text-md cursor-pointer' key={i}>
              {item.title}
            </p>
          ))}
        </div>
        <button className='bg-white font-bold text-[#7D23E0] px-6 py-2 rounded-md active:opacity-80'>
          Login
        </button>
      </nav>
    </div>
  )
}
