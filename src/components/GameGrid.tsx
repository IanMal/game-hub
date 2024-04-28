import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
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
          xl: 4,
        }}
        // minChildWidth="300px"
        spacing={3}
      >
        {isLoading
          ? skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkleton />
              </GameCardContainer>
            ))
          : games.map((game, index) => (
              <GameCardContainer key={index}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
