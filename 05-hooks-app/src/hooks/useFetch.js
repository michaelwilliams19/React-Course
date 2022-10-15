import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    // const isMounted = useRef(true);
    
    // useEffect(() => {
        //   return () => {
            //       isMounted.current = false;
            //   }
            
            // }, [])
            
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {

        //esta linea es para que me figure el "loading..." cuando quiero cambiar de quote. (multiplecustomhooks.js)
        setState({data: null, loading: true, error: null});

        fetch(url)
        .then( resp => resp.json())
        .then( data => {

            setState({
                data: data,
                loading: false,
                error: null,
            })
        });

    }, [url])

    return state;
}
