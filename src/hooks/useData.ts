import{ useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { AxiosRequestConfig, CanceledError } from 'axios';


interface FetchResponse<T> {
    count: number;
    results: T[];
}
interface Configs {
    requestConfig: AxiosRequestConfig | null;
    deps: any[];
}

const useData = <T>(endPoint: string, configs?:Configs) :[T[],string,boolean] => {
    const {requestConfig = null, deps = []} = configs || {}

    const [data, setGenres] = useState<T[]>([]);
    const [error, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
        let didAbort = false // This has to set to true in cleanUp
        
        const controller = new AbortController()
        setIsLoading(true)
      apiClient
        .get<FetchResponse<T>>(endPoint,{ signal:controller.signal, ...requestConfig })
        .then(((res) => !didAbort && setGenres(res.data.results)))
        .catch((error) => { 
            if(error instanceof CanceledError ) return
            !didAbort && setErr(error.message)
        })
        .finally(() => !didAbort && setIsLoading(false));

        return () => {
            didAbort = true
            controller.abort()
        }
    }, deps);

    return [data, error, isLoading]
}

export default useData