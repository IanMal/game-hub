import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const [games, error] = useGames();

  return (
    <>
      {error ? <Text color="red">{error}</Text> : null}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
      >
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
