import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import PageWrapper from './PageWrapper'
import { Toaster } from 'react-hot-toast'
import BottomBar from './BottomBar'

export default function Layout({ children }) {
  const [viewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  console.log(viewPort)
  return (
    <div className='relative '>
      <Toaster position='bottom-center' reverseOrder={false} />
      <Navbar />
      <div></div>
      <PageWrapper>{children}</PageWrapper>
      <Footer />
      {viewPort.width <= 500 && <BottomBar />}
    </div>
  )
}
