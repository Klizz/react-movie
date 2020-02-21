import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div>
      <Navbar />
    
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/id" component={Movie} />
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
