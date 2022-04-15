import {
  ArrowDownOutlined,
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import locationP from '../../images/icons/locationPurple.svg'
import { GrLocation } from 'react-icons/gr'
import { constants } from '../../constants'
import logoWH from '../../images/logoWhiteBG.svg'
import { BsSearch } from 'react-icons/bs'

export default function SearchBar() {
  const navigate = useNavigate()
  const { Option } = Select
  const { icons } = constants

  return (
    <div className='container mx-auto py-5'>
      <div className='md:flex justify-between hidden'>
        <img
          onClick={() => navigate('/')}
          className={`w-32  md:w-40 xl:w-40 `}
          src={logoWH}
          alt=''
        />
        <div className='flex divide-x-2 space-x-2 p-2 bg-gray-300 rounded-lg'>
          <Select
            className='bg-gray-300 border-none flex items-center active:border-none active:outline-none focus:border-none focus:outline-hidden'
            defaultValue={'New Delhi'}
          >
            <Option>New Delhi</Option>
          </Select>
          <div>
            <SearchOutlined />
            <p>ALien Institute for Neet and JEE</p>
          </div>
        </div>
        <button
          className={`  font-medium   lg:text-xl md:px-8 px-4 md:py-2 py-1  md:text-lg rounded-md active:opacity-80 sm:block hidden bg-[#7D23E0] text-[#ffffff]`}
        >
          Login
        </button>
      </div>
      <div className='flex items-center justify-around'>
        <div className='rounded-xl border border-[#7D23E0]/20 h-8 flex items-center justify-between p-2 space-x-2 w-10/12 md:hidden'>
          <img className='ml-2' src={locationP} alt='' />
          <input
            type='text'
            className='outline-none border-none'
            placeholder='Choose Location'
          />
          <DownOutlined />
        </div>
        <BsSearch className='ring-1 h-8 p-2 w-8 rounded-full font-bold text-[#7D23E0] ring-[#7D23E0]/20' />
      </div>
    </div>
  )
}
