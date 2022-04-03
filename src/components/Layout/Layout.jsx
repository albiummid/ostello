import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import PageWrapper from './PageWrapper'
import { Toaster } from 'react-hot-toast'

export default function Layout({ children }) {
  return (
    <div className='relative'>
      <Toaster position='bottom-center' reverseOrder={false} />
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </div>
  )
}
