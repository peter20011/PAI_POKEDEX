import styled from "styled-components";
import { FlexBox } from "../Flexbox";

export const HeaderContainer = styled(FlexBox)`
  margin:0;
  padding-bottom 2%;
  margin-bottom: ${(props) => props.theme.spacing.sm};

  h2 {
    margin: 0px;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[1]};
  cursor: pointer;
  border-radius: 6px;
  padding: ${(props) => props.theme.spacing.xs};
  transition: background-color ${(props) => props.theme.transitions.time} ease;
  :hover {
    background-color: ${(props) => props.theme.colors.neutral.pure};
  }
`;

export const Menu=styled.div`
position: relative;
:hover .Menu_items_a{
  display:block;
}
` 
export const Menu_items=styled.div`

position: absolute;
top:100%;
left:0;
background-color: ${(props) => props.theme.colors.neutral[1]};
transition: background-color ${(props) => props.theme.transitions.time} ease;
  :after{
    content:"";
    position:absolute;
  }
`

export const Menu_items_a=styled.a`
display:block;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 6px;
padding: ${(props) => props.theme.spacing.xs};
background-color: ${(props) => props.theme.colors.neutral[1]};
:hover {
  background-color: ${(props) => props.theme.colors.neutral.pure};
}
`
