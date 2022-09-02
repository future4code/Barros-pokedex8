import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useRequestData = (url)=>{
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(undefined)
  const [error, setError] = useState('')

  useEffect(()=> {
      setLoading(true)
        axios.get(url).then((response)=>{ 
      setLoading(false)
        setData(response.data) 
    }).catch((erro)=>{
      setError(erro)
    } )

  }, [url])
  return [data, loading, error]
}