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
    <div name='Footer' className='bg-[#1C1C1C] '>
      <>
        <div className='text-white flex justify-center md:flex-row flex-col   md:gap-20 pt-10  z-[99999]'>
          <div className='px-5'>
            <div className='flex gap-2 items-center mb-2'>
              <img
                className='w-[70px] cursor-pointer '
                src={images.ostelloLogo}
                alt=''
              />
              <p className='text-3xl text-white font-bold'>OSTELLO</p>
            </div>
            <div className='md:flex gap-5 items-center hidden justify-center my-5 '>
              {socialLinks.map((item, i) => (
                <div className='' key={i}>
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
          <div className='grid md:grid-cols-4 grid-col-1 md:gap-20 divide-y divide-gray-500 md:divide-y-0  '>
            {footerLinks.map((item, i) => (
              <div key={i} className='mb-5 px-5'>
                <p className='font-medium mb-2 lg:mb-4 mt-5 text-2xl lg:text-2xl '>
                  {item.header}
                </p>
                <div className='flex-col'>
                  {item.links.map((link, i) => (
                    <Link className='block text-xl' key={i * 7} to={link.url}>
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      <div className='flex gap-5 items-center justify-center md:hidden my-5 '>
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

      <footer className='text-white text-center font-medium text-lg py-6'>
        2022 &copy; Ostello India Private Limited{' '}
      </footer>
    </div>
  )
}
