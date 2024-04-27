import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface PlatFrom {
  id:number;
  name:string;
  slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatFrom}[];
    metacritic: number
  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () :[Game[],string,boolean] => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
      apiClient
        .get<FetchGameResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((error) =>{ 
            if(error instanceof CanceledError ) return
            setErr(error.message)})
        .finally(
             () => setIsLoading(false)
            );

        return () => controller.abort()
    },[]);

    return [games, error,isLoading]
}

export default useGames