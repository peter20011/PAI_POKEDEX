import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { MdSearch } from "react-icons/md";


import { atomPokemonSearch } from "../../../store/atoms";


import * as Atom from './atoms';
import { Button, Input } from "../..";


const PokemonSearch = () => {

  const [searchPokemon, setSearchPokemon] = useState<string>("");


  const setPokemon = useSetRecoilState(atomPokemonSearch);

  return (
    <Atom.SearchContainer align="center" justify="flex-start" direction="row" gap="xxs">
      <Input
        placeholder="Search by Id or name"
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <Button onClick={() => setPokemon(searchPokemon)}>
        <MdSearch size="20" />
        Search
      </Button>
    </Atom.SearchContainer>
  );
};

export default PokemonSearch;
