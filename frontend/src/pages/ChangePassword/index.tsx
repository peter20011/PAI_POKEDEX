import {Input, Button} from "../../components";
import PokeBallLogo from "../../assets/pokeball.svg";
import * as Types from "./types";
import {PokedexView} from "../../components/Atoms/PokedexView";
import { useRef,useState} from 'react';
import {Header } from "../../components";
import { useNavigate } from "react-router-dom";
import * as Atom from "./../../components/Atoms/Input/atoms"

const emptyFunctionADD = function() {
  return undefined;
}

const changepasswordUrl=`http://localhost:8080/app/changePassword`

const ChangePassword = () => {

  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
 }
 const navigate=useNavigate();
 const password = useRef<HTMLInputElement>(null);
 const Newpassword = useRef<HTMLInputElement>(null);
 const passwordConfirmation = useRef<HTMLInputElement>(null);

 async function sendPasswordRequest() {

  if (password.current?.value == passwordConfirmation.current?.value) {
    alert("Old password and new password are the same!");
    return;
  }

  if (Newpassword.current?.value !== passwordConfirmation.current?.value) {
    alert("New password is not correct");
    return;
  }

    const body = {
      token: sessionStorage.getItem('userToken'),
      oldPassword: password.current?.value,
      newPassword: Newpassword.current?.value,
      newPasswordConfirm: passwordConfirmation.current?.value
    };

      const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("userToken"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(body),

    };

      try{
        const response= await fetch(changepasswordUrl,requestOptions);
        if(!response.ok){
          throw response;
          alert(response);
        } 

        navigate('/login');
        alert('Password successfuly changed');
      }catch(err){
        console.log('dupa');
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

              <Atom.Input
              ref={password}
              name="password"
              placeholder="Old Password"
              type={isShown ? 'text' : 'password'}
            />
            <Atom.Input
              ref={Newpassword}
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
            <Button onClick={() => sendPasswordRequest()}> Confirm </Button>
            
            </PokedexView>
          </Types.AnimationContainer>
        </Types.Content>
        <Types.ImageLogin/>
    </Types.Container>
  );
};

export default ChangePassword;
