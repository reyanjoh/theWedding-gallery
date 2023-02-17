import React from 'react'
import FeaturedStudio from './FeaturedStudio'

const FeaturedSection = () => {
  return (
    <div className='FeaturedSection height100dvh scroll-container scroll-area'>
        <FeaturedStudio />
        <FeaturedStudio />
        <FeaturedStudio />
        <FeaturedStudio />
    </div>
  )
}

export default FeaturedSection