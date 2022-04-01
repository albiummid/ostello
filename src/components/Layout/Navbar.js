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
      <nav className='flex gap-[10px] items-center justify-between py-2 px-10  text-white '>
        <img className='w-[230px]' src={logo} alt='' />
        <div className='md:flex gap-[25px] hidden '>
          {links.map((item, i) => (
            <p className='text-xl cursor-pointer' key={i}>
              {item.title}
            </p>
          ))}
        </div>
        <button className='bg-[#ffffff] w-fit font-bold text-[#7D23E0] px-8 py-3 text-lg rounded-md active:opacity-80'>
          Buy Now
        </button>
      </nav>
    </div>
  )
}
