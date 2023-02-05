import React from 'react'
import { Helmet } from 'react-helmet'
import GalleryCard from './components/GalleryCard'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='Gallery bg-color-light flex flex-column flex-align-center flex-justify-center'>
        <Helmet>
            <title>Gallery | The Wedding Gallery</title>
            <link rel="canonical" href="https://theweddinggallery.pages.dev/example" />
            <meta name="description" content="The Wedding Gallery" />
            <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
            <meta name="author" content="Reyan John Narvaja" />
        </Helmet>
        {/* <span className='font-tiny scroll-mgs margin-bottom-1rem'>-shift+scroll-</span> */}
        <div id='slider' className='flex flex-row card-section snap-x-scroll'>
            <a href='/' id='card1'><GalleryCard srcs={'https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} /></a>
            <a href='/' id='card2'><GalleryCard srcs={'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} /></a>
            <a href='/' id='card3'><GalleryCard srcs={'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'} /></a>
            <a href='/' id='card4'><GalleryCard srcs={'https://images.unsplash.com/photo-1670272498456-a9f02e3cead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'} /></a>
            <a href='/' id='card5'><GalleryCard srcs={'https://images.unsplash.com/photo-1531898611418-0ceb51a8e0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'} /></a>
            <a href='/' id='card6'><GalleryCard srcs={'https://images.unsplash.com/photo-1519379169146-d4b170447caa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} /></a>
            <a href='/' id='card7'><GalleryCard srcs={'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} /></a>
        </div>
        
        <div className='studio-names'>
            {/* <a className='studio-name' href="#card1">Studio 1</a>
            <a className='studio-name' href="#card2">Studio 2</a>
            <a className='studio-name' href="#card3">Studio 3</a>
            <a className='studio-name' href="#card4">Studio 4</a>
            <a className='studio-name' href="#card5">Studio 5</a>
            <a className='studio-name' href="#card6">Studio 6</a>
            <a className='studio-name' href="#card7">Studio 7</a> */}
        </div>

    </div>
  )
}

export default Gallery