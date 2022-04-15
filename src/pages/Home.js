import {
  FileOutlined,
  FormOutlined,
  IdcardOutlined,
  QuestionCircleOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import React from 'react'
import CourseOutlines from '../components/Home/CourseOutlines'
import CourseOverview from '../components/Home/CourseOverview'
import Courses from '../components/Home/Courses/Courses'
import Faculty from '../components/Home/Faculty'
import FAQ from '../components/Home/FAQ'
import Header from '../components/Home/Header'
import Objectives from '../components/Home/Objectives'
import OfferSection from '../components/Home/OfferSection'
import Platforms from '../components/Home/Platforms'
import ReferCourse from '../components/Home/ReferCourse'
import Reviews from '../components/Home/Reviews/Reviews'
import ShareCourse from '../components/Home/ShareCourse'
import Navbar from '../components/Layout/Navbar'
import PageWrapper from '../components/Layout/PageWrapper'

export default function Home() {
  const iconStyle = `flex items-center text-2xl `
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
    <>
      <Navbar links={links} />
      <PageWrapper>
        <>
          <Header />
          <CourseOverview />
          <Objectives />
          <CourseOutlines />
          <Faculty />
          <OfferSection />
          <Reviews />
          <ReferCourse />
          <FAQ />
          <Courses />
          <ShareCourse />
          <Platforms />
        </>
      </PageWrapper>
    </>
  )
}
