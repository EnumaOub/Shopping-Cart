import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiHome, mdiCart, mdiStore } from '@mdi/js';

export function NavBar() {
    return (
        <StyledNav>
      <NavLinks>
        <StyledNavLink to="/"><Icon path={mdiHome} size={1.5} /></StyledNavLink>
        <StyledNavLink to="/shop"><Icon path={mdiStore} size={1.5} /></StyledNavLink>
        <StyledNavLink to="/cart"><Icon path={mdiCart} size={1.5} /></StyledNavLink>
      </NavLinks>
    </StyledNav>
        
    );
}

const StyledNav = styled.nav`
  background-color: #333;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.h1`
  color: #fff;
  font-family: 'MedievalSharp', cursive;
  font-size: 1.8rem;
  margin-top: 1.8rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &.active {
    color: #f39c12;
    font-weight: bold;
  }

  &:hover {
    color: #f39c12;
  }
`;