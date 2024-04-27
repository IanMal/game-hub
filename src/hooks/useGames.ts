import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image:string
  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () :[Game[],string] => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErr] = useState("");
  
    useEffect(() => {
        const controller = new AbortController()
      apiClient
        .get<FetchGameResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((error) =>{ 
            if(error instanceof CanceledError ) return
            setErr(error.message)});

        return ()=>controller.abort()
    },[]);

    return [games, error]
}

export default useGames