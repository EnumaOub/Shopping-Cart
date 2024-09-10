import React, { useEffect, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { CartContext } from './CartProvider';
import Icon from '@mdi/react';
import { mdiHome, mdiCart, mdiStore } from '@mdi/js';

export function NavBar() {
  const { cart } = useContext(CartContext); 
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerCartAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); 
  };

  useEffect(() => {
    if (cart.length > 0) {
      triggerCartAnimation();
    }
  }, [cart]);

  return (

      <NavBarContainer>
        <NavLinkStyled to="/"><Icon path={mdiHome} size={1.5} /></NavLinkStyled>
        <NavLinkStyled to="/shop"><Icon path={mdiStore} size={1.5} /></NavLinkStyled>
        <CartLink to="/cart" isAnimating={isAnimating}>
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

const moveAndColorChange = keyframes`
  0% {
    transform: translateY(0);
    background-color: #f39c12;
  }
  50% {
    transform: translateY(-5px);
    background-color: #e67e22;
  }
  100% {
    transform: translateY(0);
    background-color: #f39c12;
  }
`;


const CartLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 10px;
  position: relative;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  ${({ isAnimating }) =>
    isAnimating &&
    css`
      animation: ${moveAndColorChange} 0.5s ease-in-out;
    `}

  &:hover {
    color: #f39c12;
  }
`;