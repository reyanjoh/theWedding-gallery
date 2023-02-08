import React from 'react'
import { Helmet } from 'react-helmet'
import AdSpace from '../../components/AdSpace'
import Banner from './components/Banner'
import FeaturedSection from './components/FeaturedSection';
import './Home.css';


const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>The Wedding Gallery | Home</title>
        <link rel="canonical" href="https://theweddinggallery.pages.dev" />
        <meta name="description" content="The Wedding Gallery, See the works of our top rated Wedding Photographers in Bukidnon." />
        <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
        <meta name="author" content="Reyan John Narvaja" />
      </Helmet>
      
      <Banner />
      <AdSpace />
      
      <FeaturedSection />

      


  
    </div>
  )
}

export default Home