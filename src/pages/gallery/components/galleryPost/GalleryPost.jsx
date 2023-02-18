import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../../util/api/useFetch';
import { ImagesComponenet } from './component/ImagesComponenet';
import {LoadingImagesComponenet} from '../../../../components/LoadingScreens';


const GalleryPost = () => {

  const { id } = useParams();

  const {data, loading} = useFetch(`https://thewedding-gallery-headless-cms.onrender.com/api/gallery-posts/${id}`);

  return (
    <div className='GalleryPost flex flex-column padding-0-6'>

      {loading && <LoadingImagesComponenet />}   
      {data && <ImagesComponenet data={data} loading={loading}/>}


      {/* {data && <LoadingImagesComponenet />} */}

    </div>
  )
}

export default GalleryPost