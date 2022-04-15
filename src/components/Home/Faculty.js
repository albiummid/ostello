import React from 'react'
import Container from '../Layout/Container'
import mahima from '../../images/mahima.jpg'
import vishal from '../../images/nitiya.jpg'
import nitiya from '../../images/vishal.jpg'
import OstelloCarousel from '../Utils/OstelloCarousel'

export default function Faculty() {
  const faculties = [
    {
      name: 'Mahina Singh',
      degree: 'PHD, MSc',
      img: mahima,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
    },
    {
      name: 'Vishal Kumar',
      degree: 'PHD, MSc',
      img: nitiya,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
    },
    {
      name: 'Nitya Kashyap',
      degree: 'PHD, MSc',
      img: vishal,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
    },
  ]

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ]
  return (
    <section name='Faculty' className='md:py-20 py-12'>
      <Container className={''}>
        <h1 className='text-4xl font-bold text-center py-10'>Faculty</h1>
        <div className='md:max-w-[1400px] mx-auto'>
          <OstelloCarousel breakPoints={breakPoints} showArrows={false}>
            {faculties.map((item, i) => (
              <div className=' mx-2'>
                <div
                  key={i}
                  className=' p-5 md:py-12  lg:w-[350px] lg:mx-5 my-5  shadow-[#7ab1dc]/20 shadow-ost shrink-0 rounded-2xl '
                >
                  <div className='mb-2 md:mb-8 text-center '>
                    <img
                      className='h-[150px] w-[150px] mx-auto rounded-full my-2'
                      src={item.img}
                      alt=''
                    />
                    <p className='font-bold text-xl'>{item.name}</p>
                    <p className='text-md text-[#A4A4A4]'>{item.degree}</p>
                  </div>
                  <p className='text-lg text-center'>{item.details}</p>
                </div>
              </div>
            ))}
          </OstelloCarousel>
        </div>
      </Container>
    </section>
  )
}
