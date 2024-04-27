import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const [genres, error, isLoading] = useGenres();
  return (
    <ul>
      {genres.map((g, i) => (
        <li key={i}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
