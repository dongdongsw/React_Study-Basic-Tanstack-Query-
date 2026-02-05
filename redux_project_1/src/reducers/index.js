import {combineReducers} from "redux";
import foodReducer from "./foodReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
    foods: foodReducer,
    recipes: recipeReducer
})