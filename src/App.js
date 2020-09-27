import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Body } from "./components/Body";
import { HashRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
