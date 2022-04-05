import {
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { Rate } from 'antd'
import React from 'react'
import c1 from '../../../images/c1.png'
import c2 from '../../../images/c2.png'
import c3 from '../../../images/c3.png'
import c4 from '../../../images/c4.png'

export default function ReviewCard() {
  const contents = [
    {
      thumbnail: c1,
      url: '',
    },
    {
      thumbnail: c2,
      url: '',
    },
    {
      thumbnail: c3,
      url: '',
    },
    {
      thumbnail: c4,
      url: '',
    },
  ]
  return (
    <div>
      <div className='flex items-center'>
        <img src='' alt='' />
        <div>
          <h1 className='text-2xl font-bold'>Neena Sharma</h1>
          <p className='text-lg'>February,2021</p>
          <Rate value={5} className=' self-start' />
        </div>
      </div>
      <div className='flex flex-col gap-2 my-2'>
        <p className='text-lg'>
          This course is definitely above expectations so far. I didn't expect
          to get so much insight into the briefing and the communication between
          UX Designer and a client.
        </p>
        <p className='text-xl text-[#7D23E0]'>Show More</p>
      </div>
      <div className='flex items-center no-scrollbar gap-2 overflow-x-scroll'>
        {contents.map((item, i) => (
          <div>
            <img src={item.thumbnail} alt='' />
          </div>
        ))}
      </div>
      <div className='flex justify-between'>
        <div className='flex justify-center gap-10'>
          <div>
            <LikeOutlined />
            <span>Upvote</span>
          </div>
          <div>
            <ShareAltOutlined />
            <span>Share</span>
          </div>
        </div>
        <div>
          <CommentOutlined />
          <span>View Comments</span>
        </div>
      </div>
    </div>
  )
}
