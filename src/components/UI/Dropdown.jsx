import React from 'react'

export default function Dropdown({ title, icon, children }) {
  return (
    <div className='relative'>
      <p>{title}</p>
      <div>absolute</div>
    </div>
  )
}
