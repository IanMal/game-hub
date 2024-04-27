import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCarSkletion from "./GameCarSkletion";
import GameCardContainer from "./GameCardContainer";

const skeletons = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const [games, error, isLoading] = useGames();

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
        {isLoading
          ? skeletons.map((s) => (
              <GameCardContainer>
                <GameCarSkletion key={s} />
              </GameCardContainer>
            ))
          : games.map((game, index) => (
              <GameCardContainer>
                <GameCard key={index} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
