import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "./components/heroImage.jsx";
import Nav from "./components/nav.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/projects.jsx";
import Hero from "./components/hero.jsx";
import Resume from "./components/resume.jsx";
import Contact from "./components/contact.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      ;
    </div>
  );
};

export default App;
