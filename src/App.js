import React from "react";
import {Route, Routes } from "react-router-dom";
import './App.css';


import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Horns from "./pages/Horns";
import Footer from "./components/Footer";

function App() {

  return <div>
    <Navbar />
    <main style={{marginTop: '50px'}}>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="horns" element={<Horns />} />
    </Routes>
    </main> 
    <Footer />
  </div>
}

export default App;
