import { useEffect, useRef, useState } from 'react'

const useFetch = (url) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: [],
        loading: true,
        error: false
    })

    const baseUrl = 'https://akabab.github.io/superhero-api/api/'

    useEffect(() => {
        return () => isMounted.current = false
    }, [])

    useEffect(() =>{

        fetch(baseUrl + url)
        .then( resp => resp.json())
        .then( data  => {
            if(isMounted.current){
                setState({
                    loading: false,
                    error: false,
                    data
                })
            }else{
                console.log('fetch cancelado')
            }
        })
        .catch( error => {
            setState({
                loading: false,
                error: true,
                data: []
            })
            console.log(error)
        })

    },[url])


    return state;

}

export default useFetch;