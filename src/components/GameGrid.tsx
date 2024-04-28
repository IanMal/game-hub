import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { GameQuery } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
import GameCardContainer from "./GameCardContainer";

const skeletons = [1, 2, 3, 4, 5, 6];
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const [games, error, isLoading] = useGames(gameQuery);

  if (error) return <Text color="red">{error}</Text>;
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      // minChildWidth="300px"
      spacing={6}
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
  );
};

export default GameGrid;
