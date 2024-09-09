import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiHome, mdiCart, mdiStore } from '@mdi/js';

export function NavBar() {
    return (

      <NavBarContainer>
      <NavLinkStyled to="/"><Icon path={mdiHome} size={1.5} /></NavLinkStyled>
      <NavLinkStyled to="/shop"><Icon path={mdiStore} size={1.5} /></NavLinkStyled>
      <NavLinkStyled to="/cart"><Icon path={mdiCart} size={1.5} /></NavLinkStyled>

    </NavBarContainer>
        
    );
}
const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  padding: 15px;
  position: relative;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 10px;

  &:hover {
    color: #f39c12;
  }
`;

