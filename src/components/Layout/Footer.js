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
    <div className='bg-[#1C1C1C] py-10 '>
      <>
        <div className=' container mx-auto text-white'>
          <div className='grid md:flex  grid-col-1 justify-around     '>
            <div className='flex flex-col '>
              <img
                className={`w-40 lg:w-60 mr-auto ml-10 md:m-0`}
                src={logo}
                alt=''
              />
              <div className='md:flex gap-5 items-center hidden my-3   '>
                {socialLinks.map((item, i) => (
                  <div className='' key={i}>
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      <img
                        className='w-6 lg:w-10 cursor-pointer'
                        src={item.img}
                        alt={item.title}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className=' border border-r-0 border-b-0 border-l-0 first:border-t-0 w-screen' /> */}
            {footerLinks.map((item, i) => (
              <div key={i} className='mb-5 px-5 hidden sm:block '>
                <p className='font-medium mb-2 lg:mb-4 text-lg lg:text-2xl '>
                  {item.header}
                </p>
                <div className='flex-col'>
                  {item.links.map((link, i) => (
                    <Link
                      className='block lg:text-xl text-md '
                      key={i * 7}
                      to={link.url}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className='grid-cols-1 divide-solid divide-y divide-gray-600 sm:divide-none w-screen  sm:hidden'>
              {footerLinks.map((item, i) => (
                <div key={i} className='mb-5 pl-10 '>
                  <p className='font-bold mb-2  mt-5 text-lg  '>
                    {item.header}
                  </p>
                  <div className='flex-col'>
                    {item.links.map((link, i) => (
                      <Link
                        className='block  text-md font-medium '
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
        </div>
      </>

      <div className='flex gap-5 items-center justify-center md:hidden my-2 mt-10 '>
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

      <footer className='text-white text-center font-medium text-lg py-2'>
        2022 &copy; Ostello India Private Limited{' '}
      </footer>
    </div>
  )
}
