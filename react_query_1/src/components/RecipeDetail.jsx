import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function RecipeDetail(){
    const {no} = useParams();

    return (
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>레시피 상세보기</h3>

            </div>
        </div>
    )
}

export default RecipeDetail;