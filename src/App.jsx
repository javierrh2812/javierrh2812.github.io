import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/index";
import "./base.css";

const App = () => (
  <Router>
    <Nav />
    <Landing />
  </Router>
);
export default App;
