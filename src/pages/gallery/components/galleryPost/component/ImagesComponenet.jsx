import { v4 as uuidv4 } from 'uuid';


import React from 'react'

export const ImagesComponenet = ({data, loading}) => {
  return (
    <>   
      {loading && 'Loading . . .'}
        <h1>{data && data.data.attributes.title}</h1>
        <h2>{data && data.data.attributes.eventDescription}</h2>
      <div className='ImagesComponenet'>
        {/* {data && console.log(data.data.attributes)} */}
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
    </>
  )
}


export const LoadingImagesComponenet = () => {
  return (
    <>      
      <div className='LoadingImagesComponenet-head width62'>
        <div className='LoadingImagesComponenet-head-title flex flex-column flex-center'>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-title'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-title last'></div>

          <div className='LoadingImagesComponenet LoadingImagesComponenet-author'></div>
        </div>

        <div className='LoadingImagesComponenet-head-description'>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description last'></div>
        </div>
      </div>
      {/* <div></div>
      <div></div> */}
      <div className='LoadingImagesComponenet-Img-section'>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
      </div>
    
    </>
    
  )
}

