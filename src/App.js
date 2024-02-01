import React from "react";
import {Route, Routes } from "react-router-dom";
import './App.css';


import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {

  return <div style={{height:'100%'}}>
    <Navbar />
    <main style={{marginTop: '75px'}}>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
    </main> 
    <Footer />
  </div>
}

export default App;
