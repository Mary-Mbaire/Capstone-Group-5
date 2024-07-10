import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Login from './components/Login/Login';

const App = () => (
  <Router>
    <NavBar />
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
