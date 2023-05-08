import { FC } from "react";
import { FlexBox } from "../Flexbox";
import * as Atom from "./atoms";

import type { ICardProps } from "./types";

const Card: FC<ICardProps> = ({ id, image, name, type }) => {
  
  return ( 
   <a href={`/description/${name}`}>      
    <Atom.Container 
      gap="xs"
      align="center"
      justify="space-between"
      direction="column"
    >
            <FlexBox align="center" justify="flex-end" direction="row">
              <Atom.PokemonText type={type}>#{id}</Atom.PokemonText>
            </FlexBox>
            <Atom.PokemonSpot
              type={type}
              align="center"
              justify="center"
              direction="column"
            >
              <Atom.PokemonSprite src={image} alt="" />
            </Atom.PokemonSpot>
            <Atom.PokemonPreviewSection
              align="center"
              justify="space-between"
              direction="row"
            >
              <Atom.PokemonText type={type}>{name}</Atom.PokemonText>
            </Atom.PokemonPreviewSection>
      
    </Atom.Container>
    </a>     
  );
};

export default Card;
