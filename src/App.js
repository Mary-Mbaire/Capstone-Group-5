import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';



const isAuthenticated = () => {
  // Replace with actual authentication logic
  return localStorage.getItem('isAuthenticated') === 'true';
  
};

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      {/* Route for Login page */}
      <Route path="/login" element={<Login />} />

      {/* Protected route for authenticated pages */}
      <Route
        path="/*"
        element={
          isAuthenticated() ? (
            <Layout>
              <Routes>
                <Route index element={<Dashboard />} />
                {/* <Route exact path="/transactions" component={AllTransactions} />  */}
                {/* Add more authenticated routes as needed */}
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  </Router>
);

export default App;
