import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const [games, error] = useGames();

  return (
    <>
      {error ? <Text color="red">{error}</Text> : null}
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
