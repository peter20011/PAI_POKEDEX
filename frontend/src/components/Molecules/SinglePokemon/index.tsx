import { FC } from "react";
import { useRecoilState } from "recoil";


import { MdAutorenew } from "react-icons/md";


import { PokedexView, Card, FlexBox, Button, Loading } from "../../";
import { atomHashPokemon } from "../../../store/hashs";


import type { ISinglePokemon } from "./types";


const SinglePokemon: FC<ISinglePokemon> = ({ error, loading, pokemon }) => {
  
  const [hashPokemon, setHashPokemon] = useRecoilState(atomHashPokemon);

  const retryGetPokemon = () => setHashPokemon(hashPokemon + 1);

  return (
    <FlexBox align="flex-start" justify="center" direction="column" gap="xxs">
      <FlexBox align="center" justify="flex-start" direction="row" gap="xxs">
        {error && (
          <Button onClick={() => retryGetPokemon()}>
            <MdAutorenew size="20" />
            Try again
          </Button>
        )}
        {loading && (
          <Loading loadingText="Search pokemon..." isLoading={loading} />
        )}
      </FlexBox>
      {pokemon && pokemon.id && (
        <PokedexView
          align="center"
          justify="center"
          direction="row"
          gap="xxs"
          wrap="wrap"
        >
          <Card
            type={pokemon?.types?.[0]?.type?.name}
            id={pokemon.id}
            image={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon.sprites?.other?.["official-artwork"]?.front_default ||
              ""}
            name={pokemon?.name}
          />
        </PokedexView>
      )}
    </FlexBox>
  );
};

export default SinglePokemon;
