import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import logo from "./assets/hcc-new-logo_3.jpg";

// import Home from "./routes/Home";
// import About from "./routes/About";
// import Contact from "./routes/ContactForm";

function App() {
  return (
    <div className="container-fluid p-0">
      <Router>
        <Navbar />
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* </Routes> */}
      </Router>
      <Home />
      <img
        src={logo}
        className="img-fluid gx-0"
        alt="Honesdale Community Church Logo"
        width="715"
        height="209"
      />
    </div>
  );
}

export default App;
