import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../../util/api/useFetch';
import { ImagesComponenet } from './component/ImagesComponenet';
import {LoadingImagesComponenet} from '../../../../components/LoadingScreens';


const GalleryPost = () => {

  const { id } = useParams();

  const {data, loading} = useFetch(`https://thewedding-gallery-headless-cms.onrender.com/api/gallery-posts/${id}`);

  return (
    <div className='flex flex-column flex-center'>

      {loading && <LoadingImagesComponenet />}   
      {data && <ImagesComponenet data={data} loading={loading}/>}


      {/* {data && <LoadingImagesComponenet />} */}

    </div>
  )
}

export default GalleryPost