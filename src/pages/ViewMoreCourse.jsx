import React from 'react'
import Platforms from '../components/Home/Platforms'
import Container from '../components/Layout/Container'
import Navbar from '../components/Layout/Navbar'
import PageWrapper from '../components/Layout/PageWrapper'
import CourseSection from '../components/ViewMoreCourses/CourseSection'
import SearchBar from '../components/ViewMoreCourses/SearchBar'

export default function ViewMoreCourse() {
  return (
    <>
      <SearchBar />
      <PageWrapper>
        <CourseSection />
        <Platforms />
      </PageWrapper>
    </>
  )
}
