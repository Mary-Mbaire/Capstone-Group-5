import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons'; // Import faMoneyBill
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh; /* Changed from 110vh to 100vh */
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
  cursor: pointer; /* Added cursor pointer */
`;

const Icon = styled.span`
  margin-right: 10px;
`;



  const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('allCount');
    localStorage.removeItem('salesCount');
    localStorage.removeItem('purchaseCount');
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  return (
    <Container>
      <Sidebar>
        <h2>JIWEKE STORES</h2>
        <nav>
          <NavLink href="/home">
            <Icon><FontAwesomeIcon icon={faHome} /></Icon> Home
          </NavLink>
          <NavLink onClick={handleLogout}>
            <Icon><FontAwesomeIcon icon={faSignOutAlt} /></Icon> Log Out
          </NavLink>
        </nav>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
