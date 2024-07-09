import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
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

const Layout = ({ children }) => (
  <Container>
    <Sidebar>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><a href="/home" style={{color: 'white'}}>Home</a></li>
          <li><a href="/dashboard" style={{color: 'white'}}>Dashboard</a></li>
        </ul>
      </nav>
    </Sidebar>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Layout;
