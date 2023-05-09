import * as Types from "./types";
import {
  Container,
  Header,
  PokedexView,
  Button,
  CommentSection
} from "../../components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FC } from "react";
import {PokemonData} from "./../../interface/index"
import { PokemonText } from "../../components/Atoms/Card/atoms";

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
    <Types.StyledImage src="placeholder.png" alt={`${name} image`} />
  ):(
    <Types.StyledImage src={imageUrl} alt={`${name} image`} />
  );
};

const emptyFunctionADD = function() {
  return undefined;
}

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
      <Types.H1> 
      {types.map((type: any, index: number) => (
        <PokemonText key={type.slot} type={type.type.name}>
           {index === 0 ? pokemonName : ''}
           {index==0 ?  ' #'+id: ''}
        </PokemonText>
      ))}
    </Types.H1>
      <Types.PokedexView>
        <Types.PokemonImageContainer>
          <PokemonImage id={id} name={pokemonName} />
        </Types.PokemonImageContainer>
        <Types.PokemonDetails>
        <Types.TextDiv>
          <div>TYPES: {types.map((type: any) => type.type.name).join(", ")}</div>
          <div>HEIGHT: {height / 10}m</div>
          <div>WEIGHT: {weight / 10}kg</div>
          <div>ABILITIES: {abilities.map((ability: any) => ability.ability.name).join(", ")}</div>
          <div>BASE EXPIERIENCE: {base_experience}</div>
          <br/>
          <div>STATS:</div>
          <div>
            {stats.map((stat: any) => (
              <div key={stat.stat.name}>
                {stat.stat.name.toUpperCase()}: {stat.base_stat}
              </div>
            ))}
          </div>
          </Types.TextDiv>  
          <div>
            <Button onClick={() => emptyFunctionADD()}>
              Add to owned
            </Button>
            <Button onClick={() => emptyFunctionADD()}>
              Add to favorite
            </Button>
          </div>
        </Types.PokemonDetails>
      </Types.PokedexView>
      <CommentSection />
    </Container>
  );
};
export default Description;