import React from 'react'
import background from '../../../util/bride.jpg'

const Banner = () => {
  return (
    <div className="banner" style={{
        background: `url(${background})`,
        backgroundReapeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
      }}>

        <div className='banner-cta flex flex-column flex-justify-center'>
            <h1 className='banner-h1 padding-0-6 Garamond white'>See the list of top rated Wedding Photographers in Bukidnon and their works.</h1> 

            <a className='banner-btn Garamond' href="/gallery">Learn More</a>
        </div>
    </div>
  )
}

export default Banner