import "./App.css";
import "./css/style.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link> | <Link to="/About">About</Link> |{" "}
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>
      <Outlet />
      <div className="App-body"></div>
    </div>
  );
}

export default App;
