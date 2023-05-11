import {Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import {PokedexView} from "../../components/Atoms/PokedexView";
import { useRef, useState} from 'react';
import * as Atom from "./../../components/Atoms/Input/atoms"
import { useNavigate } from "react-router-dom";

const registerUrl=`http://localhost:8080/auth/register`;

const SingUp = () => {
  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  }
 
  const navigate=useNavigate()
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirmation = useRef<HTMLInputElement>(null);

  async function sendRegisterRequest() {

    if (password.current?.value !== passwordConfirmation.current?.value) {
      alert("Passwords do not match");
      return;
    }

      const body = {
        email: email.current?.value,
        password: password.current?.value,
        username: username.current?.value
      };

        const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true'
          },
          body: JSON.stringify(body),

      };

        try{
          const response= await fetch(registerUrl,requestOptions);
          if(!response.ok){
            throw response;
            alert(response);
          } 

          navigate('/login');
          alert('Registration successful! Please log in to continue.');
        }catch(err){
          if (err instanceof Response) {
            const message = await err.text();
            if (err.headers.get('Content-Type')?.includes('text/plain')) {
                alert(`Error: ${message}`);
            } else {
                alert('Error: Connection error. Please try again later.');
            }
        }
    }
  };
      
      

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
            
              <h1>Register</h1>

            <Atom.Input ref={username} name="name"  placeholder="Name" />
            <Atom.Input ref={email} name="email" placeholder="E-mail" />
            <Atom.Input
              ref={password}
              name="password"
              placeholder="Password"
              type={isShown ? 'text' : 'password'}
            />
            <Atom.Input
              ref={passwordConfirmation}
              name="password2"
              placeholder="Password"
              type={isShown ? 'text' : 'password'}
            />
            <label>
              <input type="checkbox" checked={isShown} onChange={togglePassword}/>
              <em>Show password?</em>
            </label>
            <Button onClick={() => sendRegisterRequest()}> Sign Up </Button>
            <em>
              <a href="/login" >Sign in</a>
            </em>
            
            </PokedexView>
          </Types.AnimationContainer>
        </Types.Content>
    </Types.Container>
  );
}

export default SingUp;
