import React from 'react'


const GalleryCard = ({srcs}) => {
  return (
    <div className='GalleryCard'>
       <div className="gallery-card-img-frame">
          <span className="gallery-card-img-date">
            21 <br/>
            Feb
          </span>
          <img className='gallery-card-img' src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="bdfsdf fdsfasw" srcset="" />
       </div>

       <div className="gallery-card-info">
        <span className='gallery-card-title'>
          An Intimate Tangerine Wedding Brought by 6 Years of Love
        </span>
        <div className='gallery-card-writer font-tiny'>
          By [] author-name 
        </div>

        <p className="gallery-card-p font-tiny">
          Every couple needs to adjust the number of their wedding guests to follow the restrictions during the pandemic. Some will embrace the i...
        </p>
       </div>

    </div>
  )
}

export default GalleryCard