import React from 'react'
import CourseOverview from '../components/CourseOverview'
import Header from '../components/Header'
import CourseOutlines from '../components/Home/CourseOutlines'
import Faculty from '../components/Home/Faculty'
import FAQ from '../components/Home/FAQ'
import Objectives from '../components/Home/Objectives'
import OfferSection from '../components/Home/OfferSection'
import Platforms from '../components/Home/Platforms'
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
          <FAQ />
          <ShareCourse />
          <Platforms />
        </>
      </PageWrapper>
    </>
  )
}
