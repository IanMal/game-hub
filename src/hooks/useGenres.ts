
import genres from '../data/genres';

  export interface Genre {
    id: number;
    name: string;    
    image_background: string;
    
}


const useGenres = ():[Genre[],string,boolean]  => ([
  genres,
  "",
  false
])

export default useGenres