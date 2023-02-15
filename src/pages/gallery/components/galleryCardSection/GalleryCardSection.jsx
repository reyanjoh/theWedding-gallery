import { GalleryCardLoadingScreen } from '../../../../components/LoadingScreens';
import useFetch from '../../../../util/api/useFetch';
import GalleryCard from './GalleryCard'

const GalleryCardSection = () => {
  const url = 'https://thewedding-gallery-headless-cms.onrender.com/api/gallery-posts?populate=*';

  const {data, loading} = useFetch(url);
  
  
  return (
    <section className='GalleryCardSection padding-2-6'>
        {/* <GalleryCard title={'sad'} id={1}/>
        <GalleryCard title={'saded'} id={2}/>
        <GalleryCard title={'super sad'} id={3}/>
        <GalleryCard title={''} id={1}/>
        <GalleryCard title={''} id={1}/>
        <GalleryCard title={'sad'} id={1}/>
        <GalleryCard title={'sad'} id={1}/>
        <GalleryCard title={'sad'} id={1}/>
        <GalleryCard title={'sad'} id={1}/> */}
        {/* {data && console.log(data.data)} */}


        {loading && [<GalleryCardLoadingScreen />, <GalleryCardLoadingScreen />, <GalleryCardLoadingScreen />]}

        {data && data.data.map((data)=>{
          console.log(data.data);
          return (<GalleryCard key={data.id} data={data}/>)          
        })}
        
    </section>
  )
}

export default GalleryCardSection