import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const [genres, error, isLoading] = useGenres();

  if (isLoading || error) return <Spinner />;
  return (
    <List>
      {genres.map((g, i) => (
        <ListItem key={i} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={imageUrl(g.image_background)} />
            <Button
              fontSize="large"
              noOfLines={1}
              variant="link"
              onClick={() => onSelectGenre(g)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
