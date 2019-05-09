import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./componenets/TopMenu";
import Products from "./pages/Products";

function Index() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />

        <Route path="/" exact component={Index} />
        <Route path="/Products/" component={Products} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
