import useData from './useData';
import { Genre } from './useGenres';

export interface PlatForm {
  id:number;
  name:string;
  slug:string
}

 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatForm}[];
    metacritic: number
  }


const useGames =(activeGenre:Genre | null, activePlatform: PlatForm | null) =>  useData<Game>("/games",
{ requestConfig:{
  params: { 
  genres : activeGenre?.id,
  platforms : activePlatform?.id
}}
  , deps:[activeGenre?.id, activePlatform?.id] } )

export default useGames