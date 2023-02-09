import React from 'react'


const GalleryCard = ({data, title, id, body}) => {
  return (
    <div className='GalleryCard'>
      <a href={`gallery/${title}/:${id}`} rel="noopener noreferrer">
        <div className="gallery-card-img-frame">
          <span className="gallery-card-img-date">
            21 <br/>
            Feb
          </span>
          <img className='gallery-card-img' src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="bdfsdf fdsfasw" srcset="" />
        </div>

        <div className="gallery-card-info">
          <span className='gallery-card-title'>
            {title || 'An Intimate Tangerine Wedding Brought by 6 Years of Love'}
          </span>
          <div className='gallery-card-writer flex flex-justify-center font-tiny'>
              By <div className='author-profile'></div> author-name 
          </div>
  
          <p className="gallery-card-p font-tiny">
           {body}
          </p>
        </div>
      </a>
    </div>
  )
}

export default GalleryCard