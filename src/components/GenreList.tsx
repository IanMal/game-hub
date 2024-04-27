import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const [genres] = useGenres();
  return (
    <ul>
      {genres.map((g, i) => (
        <li key={i}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
