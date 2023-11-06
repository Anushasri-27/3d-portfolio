import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from "./COMPONENTS/About";
import Contact from "./COMPONENTS/Contact";
import Home from "./COMPONENTS/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <div className="logo">
            <span className="a">A</span> <span className="n">n</span>{" "}
            <span className="u">u</span> <span className="s">s</span>{" "}
            <span className="h">h</span><span className="a">A</span> <br />
            Srivastava
          </div>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
