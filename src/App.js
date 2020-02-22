import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
