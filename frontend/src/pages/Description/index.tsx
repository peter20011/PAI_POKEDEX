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

const addFavoriteUrl=`http://localhost:8080/app/addToFavourite`
const addOwnedUrl=`http://localhost:8080/app/addToOwned`
const delOwnedUrl=`http://localhost:8080/app/deleteFromOwned`
const delFavoriteUrl=`http://localhost:8080/app/deleteFromFavourite`
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



const Description = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  

  async function addFavoriteAPI() {

    const body = {
      token: sessionStorage.getItem('userToken'),
      pokemonName: name
    };

      const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(body),

    };

      try{
        const response= await fetch(addFavoriteUrl,requestOptions);
        if(!response.ok){
          throw response;
          alert(response);
        } 

      }catch(err){
        console.log('dupa');
        if (err instanceof Response) {
          const message = await err.text();
          if (err.headers.get('Content-Type')?.includes('text/plain')) {
              alert(`Error: ${message}`);
          } else {
              alert('Pokemon already is in favorite');
          }
      }
  }
};

async function addOwnedAPI() {

  const body = {
    token: sessionStorage.getItem('userToken'),
    pokemonName: name
  };

    const requestOptions = {
      method: 'POST',
      headers: {
          'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(body),

  };

    try{
      const response= await fetch(addOwnedUrl,requestOptions);
      if(!response.ok){
        throw response;
        alert(response);
      } 

    }catch(err){
      if (err instanceof Response) {
        const message = await err.text();
        if (err.headers.get('Content-Type')?.includes('text/plain')) {
            alert(`Error: ${message}`);
        } else {
            alert('Pokemon already is owned');
        }
    }
}
};

async function delFavoriteAPI() {

  const body = {
    token: sessionStorage.getItem('userToken'),
    pokemonName: name
  };

    const requestOptions = {
      method: 'POST',
      headers: {
          'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(body),

  };

    try{
      const response= await fetch(delFavoriteUrl,requestOptions);
      if(!response.ok){
        throw response;
        alert(response);
      } 

    }catch(err){
      console.log('dupa');
      if (err instanceof Response) {
        const message = await err.text();
        if (err.headers.get('Content-Type')?.includes('text/plain')) {
            alert(`Error: ${message}`);
        } else {
            alert('Pokemon already deleted from favorites');
        }
    }
}
};

async function delOwnAPI() {

  const body = {
    token: sessionStorage.getItem('userToken'),
    pokemonName: name
  };

    const requestOptions = {
      method: 'POST',
      headers: {
          'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(body),

  };

    try{
      const response= await fetch(delFavoriteUrl,requestOptions);
      if(!response.ok){
        throw response;
        alert(response);
      } 

    }catch(err){
      console.log('dupa');
      if (err instanceof Response) {
        const message = await err.text();
        if (err.headers.get('Content-Type')?.includes('text/plain')) {
            alert(`Error: ${message}`);
        } else {
            alert('Pokemon already deleted from owned');
        }
    }
}
};

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
           {index === 0 ? pokemonName: ''}
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
            <div>
            <Button onClick={() => addOwnedAPI()}>
              Add to owned
            </Button>
            <Button onClick={() => addFavoriteAPI()}>
              Add to favorite
            </Button>
            </div>
            <div>
            <Button onClick={()=>delOwnAPI()}>
              Delete from owned
            </Button>
            <Button onClick={()=>delFavoriteAPI()}>
              Delete from favorite
            </Button>
            </div>
          </div>
        </Types.PokemonDetails>
      </Types.PokedexView>
      <CommentSection />
    </Container>
  );
};
export default Description;