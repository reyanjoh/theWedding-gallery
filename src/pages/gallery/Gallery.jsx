import React from 'react'
import { Helmet } from 'react-helmet'
import useFetch from '../../util/api/useFetch'
import GalleryCardSection from './components/galleryCardSection/GalleryCardSection'
import GalleryCardSlider from './components/GalleryCardSlider'


const Gallery = () => {

  const {data} = useFetch('https://thewedding-gallery-headless-cms.onrender.com/api/active-gallery-page-sliders?populate=*')

  return (
    <div className='Gallery bg-color-light flex flex-column flex-align-center flex-justify-center'>
        <Helmet>
            <title>Gallery | The Wedding Gallery</title>
            <link rel="canonical" href="https://theweddinggallery.pages.dev/example" />
            <meta name="description" content="The Wedding Gallery" />
            <meta name="keywords" content="See the works of our top rated Wedding Photographers in Bukidnon." />
            <meta name="author" content="Reyan John Narvaja" />
        </Helmet>
        {/* <span className='font-tiny scroll-mgs margin-bottom-1rem'>-shift+scroll-</span> */}
        <div id='slider' className='flex flex-row card-section snap-x-scroll'>
            {data && data.data[0].attributes.gallery_page_sliders.data.map((data)=>{
              // console.log(data.attributes);
              return (
                <a target="_blank" rel="noopener noreferrer" href={`https://${data.attributes.studioPageLink}`} key={data.id} id='card1'><GalleryCardSlider data={data} /></a>
              );
            })}
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

        
        {/* <AdSpace /> */}
        <GalleryCardSection />

      

    </div>
  )
}

export default Gallery