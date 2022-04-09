import React from 'react'

export default function Container({ children, className, ...args }) {
  return (
    <div {...args} className={`mx-auto container ${className}`}>
      {children}
    </div>
  )
}
