import React from 'react'

const GalleryCard = ({srcs}) => {
  return (
    <div className='GalleryCard flex flex-justify-center'>
        <img height="90%" src={srcs} alt="" srcset="" />
    </div>
  )
}

export default GalleryCard