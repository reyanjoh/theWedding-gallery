import React from 'react'
import { Helmet } from 'react-helmet'
import AdSpace from '../../components/AdSpace'
import background from '../../util/bride.jpg'

const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>The Wedding Gallery | Home</title>
        <link rel="canonical" href="https://theweddinggallery.pages.dev" />
        <meta name="description" content="The Wedding Gallery" />
        <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
        <meta name="author" content="Reyan John Narvaja" />
      </Helmet>


      <div className="banner" style={{
        background: `url(${background})`,
        backgroundReapeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>


        
      </div>
      
      <AdSpace />

  
    </div>
  )
}

export default Home