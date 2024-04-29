
import apiClient from '../services/apiClient';
import { AxiosRequestConfig,} from 'axios';
import { useQuery } from '@tanstack/react-query';


interface FetchResponse<T> {
    count: number;
    results: T[];
}
interface Configs {
    requestConfig: AxiosRequestConfig | null;
    deps: any[];
}

type Result<T> = [
    T[] | undefined,
    string | undefined, 
    boolean
]
    

const useData = <T>(endPoint: string, configs?:Configs) : Result<T> => {
    const { requestConfig = null, deps=[] } = configs || {}

    const fetchData = ()=>
        apiClient
        .get<FetchResponse<T>>(endPoint,{ ...requestConfig })
        .then(((res) => (res.data.results)))

  
   const { data, error, isLoading } = useQuery<T[],Error>({
        queryKey: [endPoint, ...deps],
        queryFn: fetchData
    })    

    return [data, error?.message, isLoading]
}

export default useData

