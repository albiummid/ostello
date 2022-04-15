import {
  AppstoreOutlined,
  GiftOutlined,
  IdcardOutlined,
  MergeCellsOutlined,
  NotificationOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import React from 'react'
import Courses from '../components/Home/Courses/Courses'
import Faculty from '../components/Home/Faculty'
import Platforms from '../components/Home/Platforms'
import Reviews from '../components/Home/Reviews/Reviews'
import ShareCourse from '../components/Home/ShareCourse'
import AboutUs from '../components/Institute/AboutUs'
import InstituteHeader from '../components/Institute/InstituteHeader'
import Navbar from '../components/Layout/Navbar'
import PageWrapper from '../components/Layout/PageWrapper'
import { BsAward } from 'react-icons/bs'
import Achievements from '../components/Institute/Achivements'

export default function Institute() {
  const iconStyle = `flex items-center text-2xl `
  const links = [
    {
      title: 'About Us',
      icon: <TeamOutlined className={iconStyle} />,
    },
    {
      title: 'Categories',
      icon: <AppstoreOutlined className={iconStyle} />,
    },
    {
      title: 'Achievements',
      icon: <BsAward className={iconStyle} />,
    },
    {
      title: 'Courses',
      icon: <IdcardOutlined className={iconStyle} />,
    },
    {
      title: 'Faculty',
      icon: <UserOutlined className={iconStyle} />,
    },
    {
      title: 'Reviews',
      icon: <NotificationOutlined className={iconStyle} />,
    },
  ]
  return (
    <>
      <Navbar links={links} primaryBG='#282828' />
      <PageWrapper>
        <>
          <InstituteHeader />
          <AboutUs />
          <Achievements />
          <Courses />
          <Faculty />
          <Reviews />
          <ShareCourse />
          <Platforms />
        </>
      </PageWrapper>
    </>
  )
}
