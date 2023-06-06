import React from 'react'
import Heading from '../Shared/Heading'

const Headers = () => {
  return (
    <>
      <Heading title={'Veluvana bali-owl bamboo house'} subtitle={'sideman indonesia'} />
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img className='object-cover w-full' src="https://veluvanabali.com/wp-content/uploads/2020/05/GARDEN-1.jpg" alt="house image" />
      </div>
    </>
  )
}

export default Headers