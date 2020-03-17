import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/Productlist";
import Details from "./Component/details";
import Cart from "./Component/Cart/";
import Default from "./Component/Default";
import Modal from "./Component/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
