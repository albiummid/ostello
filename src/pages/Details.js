import { CloseCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Layout/Container'
import obj from '../images/objects/obj.png'
import obj1 from '../images/objects/obj1.png'
import obj2 from '../images/objects/obj2.png'
import obj3 from '../images/objects/obj3.png'
import obj4 from '../images/objects/obj4.png'
import obj5 from '../images/objects/obj5.png'
import obj6 from '../images/objects/obj6.png'

export default function Details() {
  const navigate = useNavigate()
  const images = [obj2, obj2, obj2, obj2, obj2, obj2, obj2, obj2]
  return (
    <div>
      <Container className={'relative m-20 mx'}>
        <div className=' grid grid-cols-1 md:grid-cols-2  place-items-stretch  gap-2'>
          {images.map((item, i) => (
            <img
              className=' object-cover mx-10 md:mx-0 md:h-[400px] '
              key={i}
              src={item}
              alt=''
            />
          ))}
        </div>
        <CloseCircleOutlined
          onClick={() => navigate('/')}
          className='absolute -top-10 right-10  text-xl text-[#7D23E0]'
        />
      </Container>
    </div>
  )
}
