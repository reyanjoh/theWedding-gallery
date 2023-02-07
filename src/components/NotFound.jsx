import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {

  
  return (
    <div className='NotFound flex flex-center flex-column'> 

      <Helmet>
        <title>404 Not Found | The Wedding Gallery</title>
        <link rel="canonical" href="https://theweddinggallery.pages.dev/about" />
        <meta name="description" content="The Wedding Gallery About Page" />
        <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
        <meta name="author" content="Reyan John Narvaja" />
      </Helmet>
      <p>404 NotFound</p> 
      <span>looks like the page you clicked is not yet available. . . </span>
    </div>
  )
}

export default NotFound