import React, { useState } from "react";
import styled from "styled-components";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  font-family: "Georgia", serif;
  font-size: 24px;
  font-style: italic;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
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
  &:hover {
    cursor: pointer;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    cursor: pointer;
  }
`;

const MobileNav = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  width: 100%;
  background: white;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 0;

  @media (min-width: 480px) {
    display: none;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/" style={{ all: "unset" }}>
            Bertóoz
          </Link>
        </Logo>
        <Nav>
          <NavLink to="/product">MEN</NavLink>
          <NavLink to="#">WOMAN</NavLink>
          <NavLink to="#">KIDS</NavLink>
          <NavLink to="#">SALE</NavLink>
        </Nav>
        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuIcon>

        {isAuthenticated ? (
          <div>
            <p>
              {user?.fullName}, {user?.role}
            </p>
            <div
              onClick={() => {
                dispatch(logout());
              }}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Log out
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}

        <Link to="/shoppingCart" style={{ all: "unset" }}>
          <Cart>
            <ShoppingCart size={20} />
          </Cart>
        </Link>
      </HeaderContainer>
      <MobileNav open={menuOpen}>
        <NavLink to="/product" onClick={() => setMenuOpen(false)}>
          MEN
        </NavLink>
        <NavLink to="#" onClick={() => setMenuOpen(false)}>
          WOMAN
        </NavLink>
        <NavLink to="#" onClick={() => setMenuOpen(false)}>
          KIDS
        </NavLink>
        <NavLink to="#" onClick={() => setMenuOpen(false)}>
          SALE
        </NavLink>
      </MobileNav>
    </>
  );
}
