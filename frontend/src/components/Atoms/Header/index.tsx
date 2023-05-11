import { useNavigate } from "react-router-dom";


import { BsPerson } from "react-icons/bs";

import * as Atom from "./atoms";
import { Container } from "../Container";
import { MdHome } from "react-icons/md";
import { FlexBox } from "../Flexbox";
import { useEffect, useState } from "react";
import { logout as apiLogout,User, fetchUser } from "../../../auth";

const Header = () => {
  const [active, setactive]= useState(false);
  const [user,setUser]=useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUser(); // Call the fetchUser function to get the user data
      setUser(userData); // Set the user state to the fetched data
    };
    fetchUserData();
  }, []);

  return (
    <Container>
      <Atom.HeaderContainer
        align="center"
        justify="space-between"
        direction="row"
        wrap="nowrap"
      >
        <a href="/app/Home">
        <Atom.HeaderItem>
          <MdHome size="20"/>
            Homepage          
        </Atom.HeaderItem>
        </a>
        <div>
          <FlexBox align="center" justify="flex-end" direction="row" gap="xxxs">
          <Atom.Menu>
                <Atom.HeaderItem onClick={() =>setactive(!active)}>
                  <BsPerson size="20"/>  
                    {user?.username ?? 'Loading...'}
                  <Atom.Menu_items style={{
                    display: active ? "initial": "none"
                  }} >
                  <Atom.Menu_items_a href="/app/favorite">Favorite</Atom.Menu_items_a >
                  <Atom.Menu_items_a  href="/app/owned">Owned</Atom.Menu_items_a >
                  <Atom.Menu_items_a  href="/app/changepassword">Change password</Atom.Menu_items_a >
                  <Atom.Menu_items_a  onClick={()=>apiLogout()}>Logout</Atom.Menu_items_a >
                  </Atom.Menu_items>
                  </Atom.HeaderItem>
                </Atom.Menu>
          </FlexBox>
        </div>
      </Atom.HeaderContainer>
    </Container>
  );
};

export default Header;
