import React from 'react'

const GalleryCardSlider = ({srcs, studioName}) => {
  return (
    <div className='GalleryCardSlider flex flex-justify-center'>
        <div className='flex flex-justify-center flex-align-center flex-column'>
            <span className='font-small scroll-mgs margin-bottom-1rem'>-{studioName}-</span>
            <img height="90%" src={srcs} alt=""/>
        </div>
    </div>
  )
}

export default GalleryCardSlider