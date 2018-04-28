import React from 'react';
import './stylesheets/App.scss';
import CardSearch from './components/CardSearch';
import HomePage from './containers/Homepage';

import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => (
  <div>
    <NavBar />
    <Route path="/" exact component={HomePage} />
  </div>
);

export default App;
