import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import { useState} from 'react';
import {PokedexView} from "../../components/Atoms/PokedexView";
 
const emptyFunctionADD = function() {
  return undefined;
}

const Login = () => {

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
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
          <form>
            <h1>Login</h1>
            <Input name="email" placeholder="E-mail"/>
            <Input name="password" placeholder="password" type={isShown ? 'text' : 'password'} /> 
            
            <label>
              <input type="checkbox" checked={isShown} onChange={togglePassword}/>
              <em>Show password?</em>
            </label>
            <Button onClick={() => emptyFunctionADD }>
              Sing In
            </Button>
            <em>
              <a href="/SignUp" >Sign up</a>
            </em>
          </form>
          </PokedexView> 
      </Types.AnimationContainer>
      <Types.Divider />
      <Types.ImageLogin/>
    </Types.Container>
  );
};

export default Login;
