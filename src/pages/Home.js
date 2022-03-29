import React from 'react'
import CourseOverview from '../components/CourseOverview'
import Header from '../components/Header'
import Objectives from '../components/Home/Objectives'
import PageWrapper from '../components/Layout/PageWrapper'

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Header />
        <CourseOverview />
        <Objectives />
      </PageWrapper>
    </>
  )
}
