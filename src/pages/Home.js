import React from 'react'
import CourseOverview from '../components/CourseOverview'
import Header from '../components/Header'
import CourseOutlines from '../components/Home/CourseOutlines'
import Courses from '../components/Home/Courses/Courses'
import Faculty from '../components/Home/Faculty'
import FAQ from '../components/Home/FAQ'
import Objectives from '../components/Home/Objectives'
import OfferSection from '../components/Home/OfferSection'
import Platforms from '../components/Home/Platforms'
import ReferCourse from '../components/Home/ReferCourse'

import Reviews from '../components/Home/Reviews/Reviews'
import ShareCourse from '../components/Home/ShareCourse'
import PageWrapper from '../components/Layout/PageWrapper'

export default function Home() {
  return (
    <>
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
