// Filename - App.js

import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Eyes from "./pages/Eyes";
import Hair from "./pages/Hair";
import Lips from "./pages/Lips";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Formpage from "./pages/Formpage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/eyes" element={<Eyes />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/lips" element={<Lips />} />
        <Route path="/form" element={<Formpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
