import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Fragment} from "react";
import Home from "./components/layout/Home";

function App() {
  return (
      <Fragment>
        <Header/>
        <Home />
        <Footer/>
      </Fragment>

  );
}

export default App;
