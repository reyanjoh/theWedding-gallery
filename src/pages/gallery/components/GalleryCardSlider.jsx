import React from 'react'

const GalleryCardSlider = ({data}) => {
  return (
    <div className='GalleryCardSlider flex flex-justify-center'>
        <div className='flex flex-justify-center flex-align-center flex-column'>
            <span className='font-small scroll-mgs margin-bottom-1rem'>-{data.attributes.studioName}-</span>
            <img height="90%" src={data.attributes.sliderImglink} alt=""/>
        </div>
    </div>
  )
}

export default GalleryCardSlider