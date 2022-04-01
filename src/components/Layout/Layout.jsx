import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Affix } from 'antd'
import PageWrapper from './PageWrapper'
import { UpOutlined } from '@ant-design/icons'

export default function Layout({ children }) {
  return (
    <div className='relative'>
      <Navbar />
      <PageWrapper>{children}</PageWrapper>

      <Footer />
    </div>
  )
}
