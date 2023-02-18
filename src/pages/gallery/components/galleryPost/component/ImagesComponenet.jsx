import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet'
import React from 'react'
import AdSpace from '../../../../../components/AdSpace'

export const ImagesComponenet = ({data, loading}) => {
  return (
    <div className='ImagesComponenet-container'>   
      <AdSpace />

      {loading && 'Loading . . .'}
      {/* {console.log(data.data.attributes)} */}
        <Helmet>
          <title>{data.data.attributes.title ? `${data.data.attributes.title} | The Wedding Gallery` : 'The Wedding Gallery'}</title>
          <meta name="title" content={data ? `${data.data.attributes.title} | The Wedding Gallery` : null} />
          <link rel="canonical" href={data ? `https://theweddinggallery.pages.dev/gallery/${data.id}`: null} />
          <meta name="description" content={data ? data.data.attributes.eventDescription : null} />
          <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
          <meta name="author" content="Reyan John Narvaja" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="blog" />
          <meta property="og:url" content={`https://theweddinggallery.pages.dev/gallery/${data ? data.id : null}`} />
          <meta property="og:title" content={data ? `${data.data.attributes.title} | The Wedding Gallery` : null} />
          <meta property="og:description" content={data ? data.data.attributes.title : null} />
          <meta property="og:image" content={data ? data.data.attributes.coverLink : null} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={data ? `https://theweddinggallery.pages.dev/gallery/${data.id}` : null} />
          <meta property="twitter:title" content={data ? `${data.data.attributes.title} | The Wedding Gallery` : null} />
          <meta property="twitter:description" content={data ? data.data.attributes.eventDescription : null} />
          <meta property="twitter:image" content={data ? data.data.attributes.coverLink : null} />
        </Helmet>

        
  
        {/* {console.log(data.data.attributes.eventDescription)} */}
        {data ? console.log(data.data.attributes) : null}
        <h1>{data ? data.data.attributes.title : null}</h1>
        <a href={data ? `http://${data.data.attributes.authorPageLink}` : null} target="_blank" rel="noopener noreferrer" className='ImagesComponenet-author-div flex flex-center'>
          <img className='ImagesComponenet-profile' src={`${data.data.attributes.authorProfilePic ? data.data.attributes.authorProfilePic : "../TheWeddingGallery500.png"}`} alt="" />
          <h2 className='ImagesComponenet-studio'>{data ? data.data.attributes.author : null}</h2>
        </a>
        <h3 className='ImagesComponenet-h2'>{data ? data.data.attributes.eventDescription : null}</h3>
      <div className='ImagesComponenet'>
        {data ? [<img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink1} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink2} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink3} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink4} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink5} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink6} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink7} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink8} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink9} alt="" />,
                  <img className='scroll-area' key={uuidv4()} src={data.data.attributes.imgLink10} alt="" />] : null}
      </div>    

      <a className='scroll-area ImagesComponenet-view-more' href={data ? `http://${data.data.attributes.authorPageLink}`: null} target="_blank" rel="noopener noreferrer">View More</a>
    </div>
  )
}