import { useEffect, useMemo, useCallback } from "react";

import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

import {
  Container,
  FlexBox,
  Header,
  PokemonsSection,
  SinglePokemon,
} from "../../components";
import PokemonSearch from "../../components/Molecules/PokemonSearch";


import {
  atomPokemon,
  atomPokemonFetch,
  atomPokemonList,
} from "../../store/atoms";


import { atomHashPokemonsFetch, atomHashPokemonsList } from "../../store/hashs";


import {
  selectorFetchPokemons,
  selectorGetPokemon,
  selectorGetPokemons,
} from "../../store/selectors";


const HomePage = () => {
  
  const setFetchPokemons = useSetRecoilState(atomPokemonFetch);
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  const [pokemonList, setPokemonList] = useRecoilState(atomPokemonList);
  const [hashFetchMorePokemons, setHashFetchMorePokemons] = useRecoilState(
    atomHashPokemonsFetch
  );
  const [hashPokemonsList, setHashPokemonsList] =
    useRecoilState(atomHashPokemonsList);

  
  const getLodablePokemons = useRecoilValueLoadable(selectorGetPokemons);
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
  const fetchLoadablePokemon = useRecoilValueLoadable(selectorFetchPokemons);

  
  const disabledFetchMorePokemons = useMemo(() => {
    if (
      fetchLoadablePokemon.state === "hasError" ||
      fetchLoadablePokemon.state === "loading" ||
      getLodablePokemons.state === "hasError" ||
      getLodablePokemons.state === "loading"
    ) {
      return true;
    } else {
      return false;
    }
  }, [fetchLoadablePokemon.state, getLodablePokemons.state]);

  const hasFetchPokemonError = useMemo(() => {
    if (
      fetchLoadablePokemon.state === "hasError" ||
      getLodablePokemons.state === "hasError"
    ) {
      return true;
    } else {
      return false;
    }
  }, [fetchLoadablePokemon.state, getLodablePokemons.state]);

  const pokemonsCounter = useMemo(() => {
    return fetchLoadablePokemon.contents.count;
  }, [fetchLoadablePokemon.contents.count]);

  // callbacks
  const retryFethMorePokemon = useCallback(() => {
    if (fetchLoadablePokemon.state === "hasError") {
      setHashFetchMorePokemons(hashFetchMorePokemons + 1);
    }
    if (getLodablePokemons.state === "hasError") {
      setHashPokemonsList(hashPokemonsList + 1);
    }
  }, [fetchLoadablePokemon.state, getLodablePokemons.state]);

  // effects
  useEffect(() => {
    if (
      fetchLoadablePokemon.state === "hasValue" &&
      fetchLoadablePokemon.contents !== undefined
    ) {
      setFetchPokemons(fetchLoadablePokemon.contents.results);
    }
  }, [fetchLoadablePokemon.state, fetchLoadablePokemon.contents]);

  useEffect(() => {
    if (
      getLodablePokemons.state === "hasValue" &&
      getLodablePokemons.contents !== undefined
    ) {
      if (pokemonList.length > 0) {
        const filteredList = getLodablePokemons.contents.filter(
          (pokemon) => !pokemonList.find((item) => item.name === pokemon.name)
        );

        setPokemonList(pokemonList.concat(filteredList));
      } else {
        setPokemonList(getLodablePokemons.contents);
      }
    }
  }, [getLodablePokemons.state, getLodablePokemons.contents]);

  useEffect(() => {
    if (
      getLoadablePokemon?.state === "hasValue" &&
      getLoadablePokemon?.contents !== undefined
    ) {
      setPokemon(getLoadablePokemon.contents);
    }
  });

  return (
    <Container>
      <Header/>
      <FlexBox
        align="flex-start"
        justify="flex-start"
        direction="column"
        gap="xxxs"
      >
        
        <PokemonSearch />
        <SinglePokemon
          pokemon={pokemon}
          error={getLoadablePokemon.state === "hasError"}
          loading={getLoadablePokemon.state === "loading"}
        />
      </FlexBox>
      <PokemonsSection
        pokemons={pokemonList}
        disabledFetch={disabledFetchMorePokemons}
        hasErrors={hasFetchPokemonError}
        loading={
          getLodablePokemons.state === "loading" ||
          fetchLoadablePokemon.state === "loading"
        }
        pokemonCount={pokemonsCounter}
        retryFetch={retryFethMorePokemon}
      />
    </Container>
  );
};

export default HomePage;
