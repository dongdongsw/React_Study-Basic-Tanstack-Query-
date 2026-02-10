import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Fragment} from "react";
import Home from "./components/layout/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import JejuAttractionList from "./components/Jeju/JejuAttractionList";
import JejuAttractionDetail from "./components/Jeju/JejuAttractionDetail";
function App() {
  return (
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/jeju/attraction" element={<JejuAttractionList/>}/>
            <Route path="/jeju/detail/:contentid" element={<JejuAttractionDetail/>}/>
        </Routes>
        <Footer/>
      </Router>

  );
}

export default App;
