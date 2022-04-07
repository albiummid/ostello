import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { constants } from '../../constants'
import logo from '../../images/footerLogo.svg'
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
    <div className='bg-[#1C1C1C] p-5'>
      <>
        <div className='text-white flex lg:justify-center md:flex'>
          <div className='grid md:grid-cols-5 grid-col-1 md:gap-20 divide-y divide-gray-500 md:divide-y-0  '>
            <div className='flex flex-col gap-5 items-center'>
              <img className={`w-40 md:w-60  block`} src={logo} alt='' />
              <div className='md:flex gap-5 items-center hidden '>
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
            {footerLinks.map((item, i) => (
              <div key={i} className='mb-5 px-5'>
                <p className='font-medium mb-2 lg:mb-4 mt-5 text-lg lg:text-2xl '>
                  {item.header}
                </p>
                <div className='flex-col'>
                  {item.links.map((link, i) => (
                    <Link
                      className='block md:text-xl text-md '
                      key={i * 7}
                      to={link.url}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      <div className='flex gap-5 items-center justify-center md:hidden my-2 mt-10 '>
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

      <footer className='text-white text-center font-medium text-lg py-2'>
        2022 &copy; Ostello India Private Limited{' '}
      </footer>
    </div>
  )
}
