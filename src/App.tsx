import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { GameQuery, PlatForm } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => setGameQuery({ ...gameQuery, genre });
  const onSelectPlatform = (platform: PlatForm) => setGameQuery({ ...gameQuery, platform });
  const onSelectSortOrder = (sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder });
  const onSearch = (searchText: string) => setGameQuery({ ...gameQuery, searchText });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={onSearch} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={onSelectGenre} activeGenre={gameQuery.genre} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack marginBlock={5}>
          <PlatformSelector
            onSelectPlatform={onSelectPlatform}
            activePlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={onSelectSortOrder}
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
