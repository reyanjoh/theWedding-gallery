import React from 'react'
// import background from '../../../util/bride.jpg'

const Banner = () => {
  return (
    <div className="scroll-area banner" style={{
        background: 'url(./util/src/imgs/banner1.jpg)',
        backgroundReapeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
        
      }}>

        <div className='banner-cta flex flex-column flex-justify-center'>
            <h1 className='banner-h1 padding-0-6 Garamond white'>Kim + Norme Engagement Preview</h1> 

            <span className='banner-cta-studio'>Photo by: <a className='banner-cta-studio-name' href="https://www.facebook.com/rheyrhensph" target="_blank" rel="noopener noreferrer">CapturedMoments Studio</a></span>

    
            <a className='banner-btn Garamond' href="/gallery/5">View More</a>
        </div>
    </div>
  )
}

export default Banner