import "./App.css";
import "./css/style.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="logo192.png" alt="" />
        <nav>
          <Link to="/" className="App-link">
            Home
          </Link>{" "}
          |{" "}
          <Link to="/About" className="App-link">
            About
          </Link>{" "}
          |{" "}
          <Link to="/Contact" className="App-link">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
      <div className="App-body"></div>
    </div>
  );
}

export default App;
