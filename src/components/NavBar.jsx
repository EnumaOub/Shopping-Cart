import React, { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { CartContext } from './CartProvider';
import Icon from '@mdi/react';
import { mdiHome, mdiCart, mdiStore } from '@mdi/js';

export function NavBar() {
  const { cart } = useContext(CartContext); // Access the cart from context
  const [isCartHighlighted, setIsCartHighlighted] = useState(false);

  const triggerCartHighlight = () => {
    setIsCartHighlighted(true);
    setTimeout(() => setIsCartHighlighted(false), 1000); 
  };

  useEffect(() => {
    if (cart.length > 0) {
      triggerCartHighlight();
    }
  }, [cart]);

  return (

      <NavBarContainer>
      <NavLinkStyled to="/"><Icon path={mdiHome} size={1.5} /></NavLinkStyled>
      <NavLinkStyled to="/shop"><Icon path={mdiStore} size={1.5} /></NavLinkStyled>
      <CartLink to="/cart" isHighlighted={isCartHighlighted}>
        <Icon path={mdiCart} size={1.5} />
      </CartLink>

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

const CartLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 10px;
  position: relative;


  &:hover {
    color: #f39c12;
  }
`;