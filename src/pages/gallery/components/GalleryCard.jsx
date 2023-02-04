import React from 'react'

const GalleryCard = ({srcs}) => {
  return (
    <div className='GalleryCard flex flex-justify-center'>

        
        <div className='flex flex-justify-center flex-align-center flex-column'>
        <span className='font-small scroll-mgs margin-bottom-1rem'>-shift+scroll-</span>
        <img height="90%" src={srcs} alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default GalleryCard