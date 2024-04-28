import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageUrl from "../services/imageUrl";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={imageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />{" "}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <Heading fontSize="2xl" marginBottom={5} textAlign="left" marginX={3}>
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </Card>
  );
};

export default GameCard;
