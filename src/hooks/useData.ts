import{ useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { CanceledError } from 'axios';


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endPoint:string) :[T[],string,boolean] => {
    const [data, setGenres] = useState<T[]>([]);
    const [error, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
        const controller = new AbortController()
        let abort = false
        setIsLoading(true)
      apiClient
        .get<FetchResponse<T>>(endPoint,{signal:controller.signal})
        .then((res) => setGenres(res.data.results))
        .catch((error) => { 
            if(error instanceof CanceledError ) return
            setErr(error.message)
        })
        .finally(() => !abort&&setIsLoading(false));

        return () => {
            abort = true
            controller.abort()
        }
    },[]);

    return [data, error, isLoading]
}

export default useData