import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/program-applications" component={Home} />
        <Route exact path="/jobs-at-leap" component={Home} />
        <Route exact path="/swimming" component={Home} />
        <Route exact path="/news-and-events" component={Home} />
        <Route exact path="/volunteer-and-intern" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route exact path="/give-to-leap" c  omponent={Home} />
        <Route path="*" component={Home} />
      </Switch> 
    </Router>
  )   
}


export default App;
