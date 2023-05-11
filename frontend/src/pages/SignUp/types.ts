import styled ,{ keyframes} from 'styled-components';


import BacPoke from '../../assets/pokemons.jpg';


export const Container=styled.div`
margin: 0 2.5%;
height: 100vh;
display: flex;
align-items: stretch;

@media(max-width: 870px){
  margin: 0 48%;
}

@media(max-width: 390px){
  margin: 0 48%;
  transform: scale(0.85);
}

`

export const Content =styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;

width: 50%;
max-width: 900px;
`

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;


export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

  img {
    width: 100px;
    height: 100px;
  }

  form {
    margin: 60px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

    svg {
      margin-right: 50px;
    }

  }

  @media(max-width: 845px){
    transform: scale(1.2);
   }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  
  div {
    align-items: center;
    justify-content: center;
    display: flex;

    h1 {
      margin-left: 20px;
      font-family: Montserrat, sans-serif;
    }
  }
`;


export const ImageLogin = styled.div`
  flex: 1;
  background: url(${BacPoke}) no-repeat center;
  background-size: center;
  border-radius: 30%;
  background-repeat: no-repeat;
  background-position: center;

  @media(max-width: 870px){
    display:none;
  }
`;
