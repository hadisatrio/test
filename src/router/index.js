import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Content from "../view/Content";
import Content2 from "../view/Content2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Content3 from "../view/Content3";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Content />
          <Footer />
        </Route>
        <Route path="/2">
          <Navbar />
          <Content2 />
          <Footer />
        </Route>
        <Route path="/3">
          <Navbar />
          <Content3 />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
