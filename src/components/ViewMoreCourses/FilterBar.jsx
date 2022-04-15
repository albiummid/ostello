import { CloseCircleOutlined } from '@ant-design/icons'
import { Divider, Select } from 'antd'
import React from 'react'

export default function FilterBar() {
  const { Option } = Select
  return (
    <div>
      <div className='flex items-center  space-x-5 overflow-x-scroll no-scrollbar'>
        <div>
          <Select className='rounded-xl' placeholder='Category'>
            <Select.Option key={1}>Web Development</Select.Option>
            <Select.Option key={2}>Web Development</Select.Option>
            <Select.Option key={3}>Web Development</Select.Option>
          </Select>
        </div>
        <Divider type='vertical' className='h-7 bg-gray-200' />
        <div className='flex gap-5'>
          <Select placeholder='Mode'>
            <Option key={1}>Online</Option>
            <Option key={2}>Offline</Option>
            <Option key={3}>Hybrid</Option>
          </Select>
          <Select placeholder='Sort By'>
            <Option key={1}>Course Name</Option>
            <Option key={2}>Institute Name</Option>
          </Select>
          <Select placeholder='Rating'>
            <Option key={1}>1</Option>
            <Option key={2}>2</Option>
            <Option key={3}>3</Option>
            <Option key={4}>4</Option>
            <Option key={5}>5</Option>
          </Select>
          <Select placeholder='Price'>
            <Option key={1}> 6</Option>
            <Option key={2}> 6</Option>
            <Option key={3}> 6</Option>
            <Option key={4}> 6</Option>
            <Option key={5}> 6</Option>
          </Select>
          <Select placeholder='Duration'>
            <Option key={1}>1 hr</Option>
          </Select>
          <div>Offers</div>
        </div>
        <CloseCircleOutlined className='text-[#7D23E0] text-3xl mx-5' />
      </div>
    </div>
  )
}
