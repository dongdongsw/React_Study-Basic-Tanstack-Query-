import {useState, useEffect} from 'react'
import apiClient from "../../commons/http-commons";
import {Link} from "react-router-dom";

function RecipeList(){
    return(
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>레시피 목록</h3>

            </div>
        </div>
    )

}

export default RecipeList;