import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Product, ProductItem, NavBar } from "./components/";

const RouteConfig = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route path="/product/:id" component={ProductItem}></Route>
          <Route path="" component={() => <h1>ERORR 404 NOT FOUND</h1>}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RouteConfig;
