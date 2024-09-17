import { useState } from "react"
import { useEffect  } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null 
    })

    const {data, isLoading, error} = state

    const getFetch = async () => {
        if (!url) return
        try{
            const res = await fetch(url)
            const data = await res.json()
            setState({
                data,
                isLoading: false,
                error: null 
            }) 
        }
        catch(error) {
            setState({
                data: null,
                isLoading: false,
                error: error 
            })
        }
    }

    useEffect(() => { 
      getFetch()
    }, [url])

  return {
    data,
    isLoading,
    error
  }
}
