import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imageUrl from "../services/imageUrl";

const GenreList = () => {
  const [genres, error, isLoading] = useGenres();

  if (isLoading || error) return <Spinner />;
  return (
    <List>
      {genres.map((g, i) => (
        <ListItem key={i} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={imageUrl(g.image_background)} />
            <Text fontSize="large" noOfLines={1}>
              {g.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
