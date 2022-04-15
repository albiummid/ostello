import { UpOutlined } from '@ant-design/icons'
import { Affix, BackTop } from 'antd'
import React from 'react'

export default function PageWrapper({ children }) {
  return (
    <>
      <div className='bg-[#FFFFFF]'>
        <>{children}</>
        <Affix offsetBottom={10}>
          <BackTop>
            <div className=' -right-15 absolute  -bottom-10 md:bottom-10 h-[40px] w-[40px] md:h-[60px] md:w-[60px]  rounded-full bg-white flex justify-center items-center active:opacity-80 shadow-sm shadow-slate-400  '>
              <UpOutlined className='md:text-xl text-2xl font-bold flex items-center cursor-pointer text-[#7D23E0]' />
            </div>
          </BackTop>
        </Affix>
      </div>
    </>
  )
}
