import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    // margin: 0 5%;
  }
`;

export const TextDiv = styled.div`
  font-family: Montserrat, sans-serif;
`;

export const PokemonImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const PokemonDetails = styled.div`
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const PokedexView = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  margin-top: ${(props) => props.theme.spacing.xs};
  background: ${(props) => props.theme.colors.neutral[1]};
  padding: 2% 20%;
  border-radius: ${(props) => props.theme.spacing.xxxs};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const StyledImage = styled.img`
  width: 350px;
  height: 350px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;



export const ButtonRow = styled.div`
  display: flex;
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;