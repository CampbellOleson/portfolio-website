import React from "react";
import MainPage from "./main/MainPage";
import Nav from "./main/Nav";
import AmpCamp from "./case-studies/AmpCamp";
import Canopy from "./case-studies/Canopy";
import Fishhook from "./case-studies/Fishhook";
import RipCamp from "./case-studies/RipCamp";
import Footer from "./main/Footer";
import { HashRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../utils/scrollToTop";
import "../stylesheets/main.css";
import "../stylesheets/reset.css";

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/case-studies/ampcamp" component={AmpCamp} />
          <Route exact path="/case-studies/tax-prep" component={Canopy} />
          <Route exact path="/case-studies/fishhook" component={Fishhook} />
          <Route exact path="/case-studies/ripcamp" component={RipCamp} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
