import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import PageWrapper from './PageWrapper'
import { Toaster } from 'react-hot-toast'
import BottomBar from './BottomBar'

export default function Layout({ children }) {
  return (
    <div className='relative '>
      <Toaster position='bottom-center' reverseOrder={false} />
      <Navbar />
      <div></div>
      <PageWrapper>{children}</PageWrapper>
      <Footer />
      <BottomBar />
    </div>
  )
}
