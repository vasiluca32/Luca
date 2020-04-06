import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom"; //permite navigarea pe pagini

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Body } from "./components/Body";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
