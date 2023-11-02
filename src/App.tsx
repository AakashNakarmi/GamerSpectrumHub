import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./NavBar/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            SideBar
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main Content
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
