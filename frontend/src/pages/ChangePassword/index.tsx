import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import {PokedexView} from "../../components/Atoms/PokedexView";
import { useState} from 'react';
import {Header } from "../../components";
const emptyFunctionADD = function() {
  return undefined;
}

const ChangePassword = () => {

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
}


  return (
    <Types.Container>
        <Types.Content>
          <Types.AnimationContainer>
          <Header/>
            <Types.Header>
              <img src={PokeBallLogo} alt='pokeball' />
              <div>
                <h1>POKEDEX</h1>
              </div>
            </Types.Header>
            <PokedexView align="center" justify="center" direction="column" gap="xxs"> 
            
              <h1>Change Password</h1>

              <Input
              name="password"
              placeholder="Old Password"
              type={isShown ? 'text' : 'password'}
            />
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
            <Button onClick={() => emptyFunctionADD}> Confirm </Button>
            
            </PokedexView>
          </Types.AnimationContainer>
        </Types.Content>
        <Types.ImageLogin/>
    </Types.Container>
  );
};

export default ChangePassword;
