import * as Types from "./types";
import { TPokemonType, IPokemon } from "../../interface";
import {
  Container,
  Header,
  PokedexView,
  Card,
  FlexBox
} from "../../components";
import { useEffect, useState } from "react";


const ownUrl = `http://localhost:8080/app/getFromOwned`;

interface Pokemon extends IPokemon {
  id: number;
  name: string;
  type: TPokemonType[];
}


const Owned = () => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchFavPok = async () => {
      try {
        const response = await fetch(ownUrl, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("userToken"),
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Pokemon[] = await response.json();

        // Fetch additional data for each Pokemon
        const updatedPokemons: Pokemon[] = await Promise.all(
          data.map(async (pokemon) => {
            const pokemonResponse = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            if (!pokemonResponse.ok) {
              throw new Error(`Failed to fetch data for ${pokemon.name}`);
            }
            const pokemonData = await pokemonResponse.json();
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              type: pokemonData.types.map((type: any) => type.type.name),
              sprites: pokemonData.sprites,
              // Add the missing properties from the IPokemon interface
              abilities: pokemonData.abilities,
              base_experience: pokemonData.base_experience,
              forms: pokemonData.forms,
              game_indices: pokemonData.game_indices,
              // ...add the remaining missing properties...
            };
          })
        );

        setPokemons(updatedPokemons);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFavPok();
  }, []);

  return (
    <Container>
      <Header/>
      <Types.SpaceD>
      <Types.H1>Owned Pokemon</Types.H1>
      <PokedexView align="center" justify="center" direction="column" gap="xxs">
      <FlexBox
          align="center"
          justify="center"
          direction="row"
          gap="xxs"
          wrap="wrap"
          style={{ position: "relative", zIndex: 2 }}
        >
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            type={pokemon.type[0]}
            id={pokemon.id}
            image={
              pokemon.sprites?.other?.dream_world?.front_default ||
              pokemon.sprites?.other?.["official-artwork"]?.front_default ||
              ""
            }
            name={pokemon.name}
          />
        ))}
        </FlexBox>
      </PokedexView> 
      </Types.SpaceD>
    </Container>
  );
};

export default Owned;
