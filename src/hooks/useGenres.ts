
import useData from './useData';

  interface Genres {
    id: number;
    name: string;
    // background_image: string;
    // parent_platforms: { platform: PlatFrom}[];
    // metacritic: number
}


const useGenres = () =>  useData<Genres>("/genres")

export default useGenres