import { Container, FlexBox, PokedexView,Header } from "../../components";

const Error404 = () => {
  return (
    <Container>
      <FlexBox align="center" justify="center" direction="row">
        <img
          alt="Pokemon gengar gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif"
        />
      </FlexBox>
      <PokedexView align="center" justify="center" direction="column">
        <h3>Page not found.</h3>
        <span>There are only ghost</span>
      </PokedexView>
    </Container>
  );
};

export default Error404;
