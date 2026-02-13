import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Fragment} from "react";
import Home from "./components/layout/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import JejuAttractionList from "./components/Jeju/JejuAttractionList";
import JejuAttractionDetail from "./components/Jeju/JejuAttractionDetail";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import YoutubeFind from "./components/youtube/YoutubeFind";
import NewsFind from "./components/news/NewsFind";
import ChatBot from "./components/chatbot/ChatBot";

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/jeju/attraction" element={<JejuAttractionList/>}/>
            <Route path="/jeju/detail/:contentid" element={<JejuAttractionDetail/>}/>
            <Route path="/board/list" element={<BoardList/>}/>
            <Route path="/board/insert" element={<BoardInsert/>}/>
            <Route path="/board/detail/:no" element={<BoardDetail/>}/>
            <Route path="/board/update/:no" element={<BoardUpdate/>}/>
            <Route path="/board/delete/:no" element={<BoardDelete/>}/>
            <Route path="/youtube/find" element={<YoutubeFind/>}/>
            <Route path="/news/find" element={<NewsFind/>}/>
            <Route path="/chat/chatbot" element={<ChatBot/>}/>
        </Routes>
        <Footer/>
      </Router>

  );
}

export default App;
