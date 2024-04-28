import useData from './useData';
import { Genre } from './useGenres';

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


const useGames =(activeGenre:Genre | null) =>  useData<Game>("/games",
{ requestConfig:{ params: { genres:activeGenre?.id }, }, deps:[activeGenre?.id] } )

export default useGames