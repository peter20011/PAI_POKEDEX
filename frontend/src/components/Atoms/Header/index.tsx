import { useNavigate } from "react-router-dom";


import { BsPerson } from "react-icons/bs";

import * as Atom from "./atoms";
import { Container } from "../Container";
import { MdHome } from "react-icons/md";
import { FlexBox } from "../Flexbox";
import { useState } from "react";



const Header = () => {
  const [active, setactive]= useState(false);
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
                    Peterson
                  <Atom.Menu_items style={{
                    display: active ? "initial": "none"
                  }} >
                  <Atom.Menu_items_a href="/app/favorite">Favorite</Atom.Menu_items_a >
                  <Atom.Menu_items_a  href="/app/owned">Owned</Atom.Menu_items_a >
                  <Atom.Menu_items_a  href="/app/changepassword">Change password</Atom.Menu_items_a >
                  <Atom.Menu_items_a  href="/login">Logout</Atom.Menu_items_a >
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
