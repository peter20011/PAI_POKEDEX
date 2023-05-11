import styled ,{ keyframes}from 'styled-components';

import pokeLogo from '../../assets/poke.png';


export const Container=styled.div`
margin: 0 2.5%;
height: 100vh;
display: flex;
align-items: stretch;

@media(max-width: 400px){
  transform: scale(0.85);
  margin: 0 auto;
}

@media(max-width: 320px){
  transform: scale(0.80);
  margin: 0 -12%;
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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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

  animation: ${appearFromLeft} 1s;

  img {
    width: 100px;
    height: 100px;
  }

  form {
    margin: 20px 0px;
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
   margin: 0 auto;
   transform: scale(1.15);
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

export const Divider = styled.div`
  width: 1px;
  background: #f4ede8;
  margin-top: 100px;
  margin-bottom: 150px;
  margin-left: 5%;
  @media(max-width: 845px){
    display:none;
  }
`;

export const ImageLogin = styled.div`
  flex: 1;
  background: url(${pokeLogo}) no-repeat center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left:2%;
  @media(max-width: 845px){
    display:none;
  }
`;

