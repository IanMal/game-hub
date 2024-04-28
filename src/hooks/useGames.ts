import useData from './useData';

export interface PlatFrom {
  id:number;
  name:string;
  slug:string
}

 export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatFrom}[];
    metacritic: number
  }


const useGames =() =>  useData<Games>("/games")

export default useGames