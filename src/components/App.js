import React from "react";
import MainPage from "./main/MainPage";
import Nav from "./main/Nav";
import About from "./other-pages/About";
import Contact from "./other-pages/Contact";
import AmpCamp from "./case-studies/AmpCamp";
import Canopy from "./case-studies/Canopy";
import Fishhook from "./case-studies/Fishhook";
import RipCamp from "./case-studies/RipCamp";
import "../stylesheets/main.css";
import "../stylesheets/reset.css";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/case-studies/ampcamp" component={AmpCamp} />
        <Route exact path="/case-studies/canopy" component={Canopy} />
        <Route exact path="/case-studies/fishhook" component={Fishhook} />
        <Route exact path="/case-studies/ripcamp" component={RipCamp} />
      </Switch>
    </HashRouter>
  );
}

export default App;
