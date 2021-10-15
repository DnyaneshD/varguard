import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Registration from "../Registration";
import Header from "../Header";

function App() {
  return (
    <main className="main">
      <Header />
      <Router>
        <Route exact path="/" component={Registration}></Route>
      </Router>
      <footer className="footer" />
    </main>
  );
}

export default App;
