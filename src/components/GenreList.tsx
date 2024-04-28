import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  activeGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, activeGenre }: Props) => {
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
              fontWeight={activeGenre?.id === g.id ? "bold" : "normal"}
              color={activeGenre?.id === g.id ? "normal" : "grey"}
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
