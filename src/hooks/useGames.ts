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

  export interface GameQuery {
    genre: Genre | null;
    platform: PlatForm | null;
    sortOrder: string
  }


const useGames =(gameQuery:GameQuery) =>  useData<Game>("/games",
{ requestConfig:{
    params: { 
    genres : gameQuery.genre?.id,
    platforms : gameQuery.platform?.id,
    ordering: gameQuery.sortOrder
  }},
  deps:[gameQuery]
})

export default useGames