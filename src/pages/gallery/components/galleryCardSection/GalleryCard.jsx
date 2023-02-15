import React from 'react'


const GalleryCard = ({data}) => {

  // console.log(data)
  return (
    <div className='GalleryCard'>
      <a href={`/gallery/${data.id}`} rel="noopener noreferrer">
        <div className="gallery-card-img-frame">
          <span className="gallery-card-img-date">
            {data.attributes.date}

            {/* 21 <br/>
            Feb */}
          </span>
          <img className='gallery-card-img' src={data.attributes.coverLink} alt="bdfsdf fdsfasw" />
        </div>

        <div className="gallery-card-info">
          <span className='gallery-card-title'>
            {data.attributes.title || 'An Intimate Tangerine Wedding Brought by Years of Love'}
          </span>
          <div className='gallery-card-writer flex flex-justify-center font-tiny'>
              By <div className='author-profile'></div> {data.attributes.author} 
          </div>
  
          <p className="gallery-card-p font-tiny">
           {data.eventDescription}
          </p>
        </div>
      </a>
    </div>
  )
}

export default GalleryCard