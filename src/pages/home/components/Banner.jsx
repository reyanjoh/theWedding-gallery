import React from 'react'
// import background from '../../../util/bride.jpg'

const Banner = () => {
  return (
    <div className="banner scroll-area" style={{
        background: 'url(https://images.unsplash.com/photo-1498979237786-9c35706bd45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
        backgroundReapeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
        
      }}>

        {/* <div className='banner-cta flex flex-column flex-justify-center'>
            <h1 className='banner-h1 padding-0-6 Garamond white'>See the list of top rated Wedding Photographers in Bukidnon and their works.</h1> 

            <a className='banner-btn Garamond' href="/gallery">Learn More</a>
        </div> */}
    </div>
  )
}

export default Banner