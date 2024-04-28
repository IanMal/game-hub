import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { PlatForm } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

const skeletons = [1, 2, 3, 4, 5, 6];
interface Props {
  activeGenre: Genre | null;
  activePlatform: PlatForm | null;
}

const GameGrid = ({ activeGenre, activePlatform }: Props) => {
  const [games, error, isLoading] = useGames(activeGenre, activePlatform);

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
