import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #34495e;
  padding: 0.5rem;
`;

const NavItem = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
`;

const NavBar = () => (
  <Nav>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/dashboard">Dashboard</NavItem>
  </Nav>
);

export default NavBar;
