import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import FoodDetail from "./components/food/FoodDetail";
import {useNavigate, useParams} from "react-router-dom";
import apiClient from "./commons/http-commons";
import RecipeList from "./components/recipe/RecipeList";
/*
  관리 = 출력화면을 찾는다
        Router
          |
        화면 모음 : Routes => 스위치
          |
        화면 1개 : Route

 */
/*
    1. typescript
    2. nodejs
    3. jpa
    4. mysql

 */

function App() {
  return (
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/food/detail/:fno" element={<FoodDetail/>}/>
            <Route path="/recipe/list" element={<RecipeList/>}/>
        </Routes>
      </Router>
  );
}

export default App;
