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