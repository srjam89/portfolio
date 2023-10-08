import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import MainTrial from "./components/MainTrial";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainTrial />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
      <div className="preloader"></div>
    </Router>
  );
};

export default App;
