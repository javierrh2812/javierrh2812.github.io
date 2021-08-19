import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav";
import Landing from "./pages/index";
import "./styles/index.scss";

const App = () => (
  <Router>
    <Nav />
    <Landing />
  </Router>
);
export default App;
