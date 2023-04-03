import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import {PokedexView} from "../../components/Atoms/PokedexView";
import { Form } from '@unform/web';
 
const emptyFunctionADD = function() {
  return undefined;
}

const SingUp = () => {
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
            <PokedexView align="center" justify="center" direction="column" gap="xxs"  >
            <form >
              <h1>Register</h1>

            <Input name="name"  placeholder="Name" />
            <Input name="email" placeholder="E-mail" />
            <Input
              name="password"
              placeholder="password"
              type="password"
            />

            <Button onClick={() => emptyFunctionADD}> Sign Up </Button>
            </form>
            </PokedexView>
          </Types.AnimationContainer>
        </Types.Content>
    </Types.Container>
  );
};

export default SingUp;
