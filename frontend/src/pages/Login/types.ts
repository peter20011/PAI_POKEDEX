import styled ,{ keyframes}from 'styled-components';
import { FlexBox } from '../../components'

import charizardLogo from '../../assets/charizard.svg';


export const Container=styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`

export const Content =styled.div`
display: flex;
flex-direction: column;
place-content: center;
align-items: center;

width: 40%;
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
    width: 150px;
    height: 150px;
  }

  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #f8512d;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 50px;
    }
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
  margin-left: 10%;
`;

export const ImageLogin = styled.div`
  flex: 1;
  margin-bottom: 150px;
  background: url(${charizardLogo}) no-repeat center;
`;

export const LoginForm=styled.div`
margin: 0 50px;

`