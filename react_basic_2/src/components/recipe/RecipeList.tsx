import {useState, useEffect} from 'react'
import apiClient from "../../commons/http-commons";
import {Link} from "react-router-dom";
import {Recipe, RecipeProps} from "../../types";



function RecipeList(){
    const [curpage, setCurpage] = useState<number>(1);
    const [recipeData, setRecipeData] = useState<RecipeProps>();

    useEffect(() => {
        const fetchList= async()=>{
            const res = await apiClient.get(`/recipe/list_react/${curpage}`)
            console.log(res.data)
            setRecipeData(res.data)
            return res.data
        }
        fetchList();
    }, [curpage]);

    const html=recipeData?.list.map((recipe:Recipe,index:number)=> {

        return(
            <div className="col-md-3" key={index}>
                <div className="thumbnail">
                    <Link to={`/recipe/detail/${recipe.no}`}>
                        <img src={recipe.poster} alt="Lights" style={{"width":"250px","height":"150px"}} />
                        <div className="caption">
                            <p>{recipe.title}</p>
                        </div>
                    </Link>
                </div>
            </div>
        )


    })

    const prev=()=> recipeData && setCurpage(recipeData?.startPage-1);
    const next=()=> recipeData && setCurpage(recipeData?.endPage+1);
    const pageChange =(page:number)=>recipeData && setCurpage(page);
    const pageArr=[]
    if (recipeData && recipeData.startPage > 1) {
        pageArr.push(
            <li><a className={"a-link"} onClick={prev}>&laquo;</a></li>
        )
    }
    if (recipeData) {
        for (let i: number = recipeData.startPage; i <= recipeData.endPage; i++) {
            pageArr.push(
                <li className={i===curpage?"active":""}><a className={"a-link"} onClick={()=>pageChange(i)}>{i}</a></li>
            )
        }
    }
    if (recipeData && recipeData.endPage < recipeData.totalpage) {
        pageArr.push(
            <li><a className={"a-link"} onClick={next}>&raquo;</a></li>
        )
    }

    return(
        <div className={"container"}>
            <div className={"row"}>
                {html}
            </div>
            <div className={"row text-center"} style={{"marginTop":"10px"}}>
                <ul className={"pagination"}>
                    {pageArr}
                </ul>

            </div>
        </div>
    )

}

export default RecipeList;