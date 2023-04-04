import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import {PokedexView} from "../../components/Atoms/PokedexView";
import { useState} from 'react';
 
const emptyFunctionADD = function() {
  return undefined;
}

const SingUp = () => {

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
}


  return (
    <Types.Container>
        <Types.ImageLogin/>
        <Types.Content>
          <Types.AnimationContainer>
            <Types.Header>
              <img src={PokeBallLogo} alt='pokeball' />
              <div>
                <h1>POKEDEX</h1>
              </div>
            </Types.Header>
            <PokedexView align="center" justify="center" direction="column" gap="xxs"> 
            <form >
              <h1>Register</h1>

            <Input name="name"  placeholder="Name" />
            <Input name="email" placeholder="E-mail" />
            <Input
              name="password"
              placeholder="Password"
              type={isShown ? 'text' : 'password'}
            />
            <Input
              name="password2"
              placeholder="Password"
              type={isShown ? 'text' : 'password'}
            />
            <label>
              <input type="checkbox" checked={isShown} onChange={togglePassword}/>
              <em>Show password?</em>
            </label>
            <Button onClick={() => emptyFunctionADD}> Sign Up </Button>
            <em>
              <a href="/login" >Sign in</a>
            </em>
            </form>
            </PokedexView>
          </Types.AnimationContainer>
        </Types.Content>
    </Types.Container>
  );
};

export default SingUp;
