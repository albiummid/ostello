import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function PageWrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className=''>{children}</div>
      <Footer />
    </>
  )
}
