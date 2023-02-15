import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet'
import React from 'react'

export const ImagesComponenet = ({data, loading}) => {
  return (
    <>   

      {loading && 'Loading . . .'}
      {console.log(data.data.attributes)}
        <Helmet>
          <title>{`${data.data.attributes.eventDescription} | The Wedding Gallery`}</title>
          <meta name="title" content={`${data.data.attributes.title} | The Wedding Gallery`} />
          <link rel="canonical" href={`https://theweddinggallery.pages.dev/gallery/${data.id}`} />
          <meta name="description" content={data.data.attributes.title} />
          <meta name="keywords" content="Wedding, Gallery, The Wedding Gallery" />
          <meta name="author" content="Reyan John Narvaja" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="blog" />
          <meta property="og:url" content={`https://theweddinggallery.pages.dev/gallery/${data.id}`} />
          <meta property="og:title" content={`${data.data.attributes.title} | The Wedding Gallery`} />
          <meta property="og:description" content={data.data.attributes.title} />
          <meta property="og:image" content={data.data.attributes.coverLink} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://theweddinggallery.pages.dev/gallery/${data.id}`} />
          <meta property="twitter:title" content={`${data.data.attributes.title} | The Wedding Gallery`} />
          <meta property="twitter:description" content={data.data.attributes.title} />
          <meta property="twitter:image" content={data.data.attributes.coverLink} />
        </Helmet>

        
  
        {/* {console.log(data.data.attributes.eventDescription)} */}
      
        <h1>{data && data.data.attributes.title}</h1>
        <h2 className='padding-0-6 ImagesComponenet-h2'>{data && data.data.attributes.eventDescription}</h2>
      <div className='padding-0-6 ImagesComponenet'>

        {data && [<img key={uuidv4()} src={data.data.attributes.imgLink1} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink2} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink3} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink4} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink5} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink6} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink7} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink8} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink9} alt="" />,
                  <img key={uuidv4()} src={data.data.attributes.imgLink10} alt="" />]}
      </div>    
      

      <a className='ImagesComponenet-view-more' href={`http://${data.data.attributes.authorPageLink}`} target="_blank" rel="noopener noreferrer">View More</a>
    </>
  )
}