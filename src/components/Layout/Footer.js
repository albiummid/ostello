import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { constants } from '../../constants'
import Container from './Container'

export default function Footer() {
  const { images, icons } = constants
  const navigate = useNavigate()

  const socialLinks = [
    {
      title: 'instagram',
      link: 'https://instagram.com/',
      img: icons.insta,
    },
    {
      title: 'facebook',
      link: 'https://facebook.com/',
      img: icons.fb,
    },
    {
      title: 'youtube',
      link: 'https://youtube.com/',
      img: icons.yt,
    },
    {
      title: 'linkedin',
      link: 'https://linkedin.com/in/albiummid',
      img: icons.lin,
    },
  ]
  const footerLinks = [
    {
      header: 'About us',
      links: [
        {
          title: 'Who we are',
          url: '/',
        },
        {
          title: 'Press',
          url: '/',
        },
        {
          title: 'Careers',
          url: '/',
        },
        {
          title: 'Blogs',
          url: '/',
        },
      ],
    },
    {
      header: 'Events',
      links: [
        {
          title: 'About Our Events',
          url: '/',
        },
        {
          title: 'Scholarship',
          url: '/',
        },
      ],
    },
    {
      header: 'Contact Us',
      links: [
        {
          title: 'FAQs',
          url: '/',
        },
        {
          title: 'Support',
          url: '/',
        },
      ],
    },
    {
      header: 'Terms of Use',
      links: [
        {
          title: 'Terms & Conditions',
          url: '/',
        },
        {
          title: 'Privacy Ploicy',
          url: '/',
        },
        {
          title: 'Refund Policy',
          url: '/',
        },
        {
          title: 'Trust & Safety',
          url: '/',
        },
        {
          title: 'Support',
          url: '/',
        },
      ],
    },
  ]

  return (
    <div className='bg-[#1C1C1C] '>
      <>
        <div className='text-white flex justify-center md:flex-row flex-col   md:gap-20 p-10 z-[99999]'>
          <div className=' '>
            <div className='flex gap-2 items-center mb-2'>
              <img
                className='w-[60px] cursor-pointer '
                src={images.ostelloLogo}
                alt=''
              />
              <p className='text-3xl text-white font-bold'>OSTELLO</p>
            </div>
            <div className='md:flex gap-5 items-center hidden'>
              {socialLinks.map((item, i) => (
                <div o className='' key={i}>
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    <img
                      className='w-[30px] cursor-pointer'
                      src={item.img}
                      alt={item.title}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className='grid md:grid-cols-4 grid-col-1 md:gap-20 divide-y '>
            {footerLinks.map((item, i) => (
              <div key={i} className='mb-5'>
                <p className='font-bold mb-2 mt-5 text-lg'>{item.header}</p>
                <div className='flex-col'>
                  {item.links.map((link, i) => (
                    <Link className='block' key={i * 7} to={link.url}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      <div className='flex gap-5 items-center justify-center md:hidden'>
        {socialLinks.map((item, i) => (
          <div o className='' key={i}>
            <a href={item.link} target='_blank' rel='noreferrer'>
              <img
                className='w-[20px] cursor-pointer'
                src={item.img}
                alt={item.title}
              />
            </a>
          </div>
        ))}
      </div>

      <footer className='text-white text-center font-medium text-sm md:text-lg py-2'>
        2022 &copy; Ostello India Private Limited{' '}
      </footer>
    </div>
  )
}
