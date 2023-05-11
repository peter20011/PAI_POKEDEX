import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import { useState} from 'react';
import {PokedexView} from "../../components/Atoms/PokedexView";
import { useRef } from 'react';
import { login as apiLogin } from '../../auth';
import {useNavigate } from 'react-router-dom';
import * as Atom from "./../../components/Atoms/Input/atoms"

const Login = () => {

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  }

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    async function sendLoginRequest() {
        if (!password.current?.value || !email.current?.value){
            return;
          }
        else {
            const resp = await apiLogin(email.current?.value, password.current?.value, navigate);
            if (resp !== undefined) alert(`Error: ${resp}`);
        }
    }


  return (
    <Types.Container>
      <Types.AnimationContainer>
        <Types.Header>
          <img src={PokeBallLogo} alt="pokeball"/>
          <div>
            <h1>POKEDEX</h1>
          </div>
        </Types.Header>
        <PokedexView align="center" justify="center" direction="column" gap="xxs"> 
          
          
            <h1>Login</h1>
            <Atom.Input ref={email} name="email" placeholder="E-mail"/>
            <Atom.Input ref={password} name="password" placeholder="password" type={isShown ? 'text' : 'password'} /> 
            
            <label>
              <input type="checkbox" checked={isShown} onChange={togglePassword}/>
              <em>Show password?</em>
            </label>
              <Button onClick={() => sendLoginRequest() }>
                Sing In
              </Button>
              <em>
                <a href="/SignUp" >Sign up</a>
              </em>
          </PokedexView> 
      </Types.AnimationContainer>
      <Types.Divider />
      <Types.ImageLogin/>
    </Types.Container>
  );
};

export default Login;
