import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import {PokedexView} from "../../components/Atoms/PokedexView";
 
const emptyFunctionADD = function() {
  return undefined;
}

const Login = () => {
  return (
    <Types.Container>
      <Types.AnimationContainer>
        <Types.Header>
          <img src={PokeBallLogo} alt="pokeball"/>
          <div>
            <h1>POKEDEX</h1>
          </div>
        </Types.Header>
          <form>
          {/* <PokedexView align="center" justify="center" direction="column" gap="xxs"  > */}
            <h1>Log in</h1>
            <Input name="email" placeholder="E-mail"/>
            <Input name="password" placeholder="password" type="password" /> 
            
            <Button onClick={() => emptyFunctionADD }>
              Sing Up
            </Button>
            {/* </PokedexView> */}
          </form>
      </Types.AnimationContainer>
      <Types.Divider />
      <Types.ImageLogin/>
    </Types.Container>
  );
};

export default Login;
