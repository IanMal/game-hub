
import useData from './useData';

  export interface Genre {
    id: number;
    name: string;    
    image_background: string;
    // parent_platforms: { platform: PlatFrom}[];
    // metacritic: number
}


const useGenres = () =>  useData<Genre>("/genres")

export default useGenres