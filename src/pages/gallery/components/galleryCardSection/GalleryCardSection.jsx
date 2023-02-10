import useFetch from '../../../../util/api/useFetch';
import GalleryCard from './GalleryCard'

const GalleryCardSection = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const {data, loading, err} = useFetch(url);
  
  
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


        {data && data.map((data)=>{
          return <GalleryCard key={data.id} data={data} title={data.title} id={data.id} body={data.body}/>
        })}
        
    </section>
  )
}

export default GalleryCardSection