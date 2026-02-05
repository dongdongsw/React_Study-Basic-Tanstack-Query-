import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchRecipeList} from "../actions/recipeActions";
import {Link} from "react-router-dom";

function RecipeList(){
    const [curpage, setCurpage] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchRecipeList(curpage));
    },[curpage])

    const recipe_list = useSelector(state => state.recipes?.recipe_list?.list);
    const totalpage = useSelector(state => state.recipes.recipe_list.totalpage);
    const startPage = useSelector(state => state.recipes.recipe_list.startPage);
    const endPage = useSelector(state => state.recipes.recipe_list.endPage);

    const pageChange=(page)=>{
        setCurpage(page);
    }

    const prev=()=>{
        setCurpage(startPage - 1)
    }

    const next=()=>{
        setCurpage(startPage + 1)
    }

    const row = []
    if(startPage > 1 ){
        row.push(
            <li><a className={"a-link"}>&laquo;</a></li>
        )
    }

    for(let i=startPage; i<=endPage; i++){
        row.push(
            <li className={i === curpage?"active":""}><a className={"a-link"} onClick={()=>pageChange(i)}>{i}</a></li>
        )
    }

    if(endPage < totalpage ){
        row.push(
            <li><a className={"a-link"}>&raquo;</a></li>
        )
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                {
                    recipe_list && recipe_list.map((recipe, index)=>
                        <div className="col-md-3" key={index}>
                            <div className="thumbnail">
                                <Link to={`/recipe/detail/${recipe.no}`}>
                                    <img src={recipe.poster} alt="Lights" style={{"width":"250px","height":"150px"}}
                                    title={recipe.title}/>
                                    <div className="caption">
                                        <p>{recipe.chef}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    )
                }
            </div>
            <div className={"row text-center"} style={{"marginTop":"10px"}}>
                <ul className={"pagination"}>
                    {row}
                </ul>
            </div>
        </div>
    )
}

export default RecipeList;