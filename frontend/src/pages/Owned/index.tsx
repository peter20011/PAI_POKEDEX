import * as Types from "./types";
import {
  Container,
  Header,
  PokedexView,
} from "../../components";


const Owned = () => {
  return (
    <Container>
      <Header/>
      <Types.H1>Owned Pokemon</Types.H1>
      <PokedexView align="center" justify="center" direction="column" gap="xxs"/> 
    </Container>
  );
};

export default Owned;
