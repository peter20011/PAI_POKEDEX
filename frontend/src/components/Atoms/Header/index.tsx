import { useNavigate } from "react-router-dom";

// icons
import { BsPerson } from "react-icons/bs";
// components
import * as Atom from "./atoms";
import { Container } from "../Container";
import { MdHome } from "react-icons/md";
import { FlexBox } from "../Flexbox";
import { useState } from "react";


// ::
const Header = () => {
  const [active, setactive]= useState(false);
  return (
    <Container>
      <Atom.HeaderContainer
        align="center"
        justify="space-between"
        direction="row"
        wrap="wrap"
      >
        <Atom.HeaderItem>
          <div>
          <MdHome size="20"/>
            Homepage
          </div>
        </Atom.HeaderItem>
        <div>
          <FlexBox align="center" justify="flex-end" direction="row" gap="xxxs">
          <Atom.Menu>
                <Atom.HeaderItem onClick={() =>setactive(!active)}>
        
                  <BsPerson size="20"/>  
                    Peterson
                  
                  <Atom.Menu_items style={{
                    display: active ? "initial": "none"
                  }} >
                  <Atom.Menu_items_a href="/login">Favorite</Atom.Menu_items_a >
                  <Atom.Menu_items_a  href="/login">Owned</Atom.Menu_items_a >
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
