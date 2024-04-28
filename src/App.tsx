import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { PlatForm } from "./hooks/useGames";

function App() {
  const [activeGenre, setActiveGenre] = useState<Genre | null>(null);
  const [activePlatform, setActivePlatform] = useState<PlatForm | null>(null);

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
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={setActiveGenre} activeGenre={activeGenre} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={setActivePlatform}
          activePlatform={activePlatform}
        />
        <GameGrid activeGenre={activeGenre} activePlatform={activePlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
