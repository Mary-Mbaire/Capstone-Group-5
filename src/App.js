import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <NavBar />
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
