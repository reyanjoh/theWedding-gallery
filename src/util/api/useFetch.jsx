import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(()=>{
        const getData = async () =>{
            try {
                const res = await fetch(url);
                const Json = await res.json();
                setData(Json);
                setLoading(false)
            } catch (error) {
                setErr(error);
            }
        }
        getData();
    }, [url]);

  return {data, loading, err}
}

export default useFetch