import {FETCH_RECIPE_LIST, FETCH_RECIPE_DETAIL} from "../actions/types";

const recipeState = {
    recipe_list:[],
    recipe_detail:{}
}

export default function(state = recipeState, action){
    switch(action.type){
        case FETCH_RECIPE_LIST:
            return{
                ...state,
                recipe_list:action.payload

            }
        case FETCH_RECIPE_DETAIL:
            return{
                ...state,
                recipe_detail:action.payload

            }
        default:
            return state;
    }
}

