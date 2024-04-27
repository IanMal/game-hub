import{ useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { CanceledError } from 'axios';

interface Genres {
    id: number;
    name: string;
    // background_image: string;
    // parent_platforms: { platform: PlatFrom}[];
    // metacritic: number
}
interface FetchGenreResponse {
    count: number;
    results: Genres[];
}

const useGenres = () :[Genres[],string,boolean] => {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
      apiClient
        .get<FetchGenreResponse>("/genres")
        .then((res) => setGenres(res.data.results))
        .catch((error) =>{ 
            if(error instanceof CanceledError ) return
            setErr(error.message)})
        .finally(
             () => setIsLoading(false)
            );

        return () => controller.abort()
    },[]);

    return [genres, error, isLoading]
}

export default useGenres