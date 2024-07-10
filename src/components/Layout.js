import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  height: 110vh;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #2c3e50;
  color: #fff;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  background: #ecf0f1;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Layout = ({ children }) => (
  <Container>
    <Sidebar>
      <h2>JIWEKE STORES</h2>
      <nav>
        <NavLink href="/home">
          <Icon><FontAwesomeIcon icon={faHome} /></Icon> Home
        </NavLink>
        <NavLink href="/dashboard">
          <Icon><FontAwesomeIcon icon={faChartBar} /></Icon> Dashboard
        </NavLink>
      </nav>
    </Sidebar>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Layout;
