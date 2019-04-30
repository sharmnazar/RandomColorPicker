import React from 'react';
import Container from "./components/Container"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import PaletteContainer from "./components/PaletteContainer"

function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Container}/>
            <Route path="/palette" component={PaletteContainer}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
