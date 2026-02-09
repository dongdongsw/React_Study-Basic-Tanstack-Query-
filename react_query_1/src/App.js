import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FoodList from "./components/FoodList";
import FoodDetail from "./components/FoodDetail";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
// controller => 화면 변경

function App() {
  return (
    <Router>
      <Routes>
        {/* 화면 UI = 화면 이동*/}
        <Route path="/food/list" element={<FoodList/>} />
        <Route path="/food/detail/:fno" element={<FoodDetail/>} />
        <Route path="/recipe/list" element={<RecipeList/>} />
        <Route path="/recipe/detail/:no" element={<RecipeDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
