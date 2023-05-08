import * as Types from "./types";
import {
  Container,
  Header,
  PokedexView,
  Button,
  Card
} from "../../components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FC } from "react";


interface PokemonData {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  species: {
    name: string;
    url: string;
    genera: {
      genus: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    }[];
  };
  forms: {
    name: string;
    url: string;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
} 



const getStringIDfromID = (id: number) => {
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  } else {
    return `${id}`;
  }
};


export const getPokemonImage = async (id: number) => {
  const pngUrl = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${getStringIDfromID(id)}.png`;
  const officialArtworkUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const svgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  try {
    const response = await fetch(pngUrl);
    if (response.status === 200) {
      return pngUrl;
    }
  } catch {}

  try {
    const response = await fetch(svgUrl);
    if (response.status === 200) {
      return svgUrl;
    }
  } catch {}


  return officialArtworkUrl;
};

export const PokemonImage: FC<{ id: number; name: string }> = ({ id, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getPokemonImage(id);
      setImageUrl(url);
      setIsLoading(false);
    };
    fetchImage();
  }, [id]);

  return isLoading ? (
    <img src="placeholder.png" alt={`${name} image`} />
  ):(
    <img src={imageUrl} alt={`${name} image`} />
  );
};


const Description = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [versionDescription, setVersionDescription] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }


  const {
    id,
    name: pokemonName,
    types,
    height,
    weight,
    abilities,
    base_experience,
    species: { name: speciesName, genera, flavor_text_entries },
    stats,
  } = pokemonData;
          
  return (
    <Container>
      <Header />
      <Types.H1> {pokemonName.toUpperCase()}</Types.H1>
      <PokedexView align="center" justify="center" direction="column" gap="xxs">
        <div>Types: {types.map((type: any) => type.type.name).join(", ")}</div>
        <div>Height: {height / 10}m</div>
        <div>Weight: {weight / 10}kg</div>
        <div>Abilities: {abilities.map((ability: any) => ability.ability.name).join(", ")}</div>
        <div>Base Experience: {base_experience}</div>
        <div>Stats:</div>
        <ul>
          {stats.map((stat: any) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
        </li>
        ))}
        </ul>
        <PokemonImage id={id} name={pokemonName} />
        </PokedexView>
        </Container>
        );
};

export default Description;