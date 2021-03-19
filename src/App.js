import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainVisual from "./components/MainVisual";

function App() {
  return (
    <Router>
      <Route path="" component={MainVisual} />
    </Router>
  );
}

export default App;
