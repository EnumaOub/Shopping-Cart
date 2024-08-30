import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export function NavBar() {
    return (
        <StyledNav>
      <NavLinks>
        <StyledNavLink to="/"
                 activeClassName="active" >Home</StyledNavLink>
        <StyledNavLink to="/shop"
                 activeClassName="active" >Shop</StyledNavLink>
        <StyledNavLink to="/cart"
                 activeClassName="active" >Cart</StyledNavLink>
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