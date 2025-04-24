import React from 'react';
import styled from 'styled-components';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  font-family: 'Georgia', serif;
  font-size: 24px;
  font-style: italic;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo><Link to='/' style={{color:'black' , textDecoration:'none'}}>Bertóoz</Link></Logo>
      <Nav>
        <NavLink href="#"><Link to='/product' style={{color:'black' , textDecoration:'none'}}>MEN</Link> </NavLink>
        <NavLink href="#">WOMAN</NavLink>
        <NavLink href="#">KIDS</NavLink>
        <NavLink href="#">SALE</NavLink>
      </Nav>
      <Cart>
        <ShoppingCart size={20} />
      </Cart>
    </HeaderContainer>
  );
}