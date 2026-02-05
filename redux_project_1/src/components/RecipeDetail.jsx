import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {fetchRecipeDetail} from "../actions/recipeActions";

function Recipedetail(){
    const {no} = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        dispatch(fetchRecipeDetail(no));
    }, [no]);

    const recipe_detail = useSelector(state => state.recipes.recipe_detail);

    if(!recipe_detail.vo || recipe_detail.tList.length === 0) return null;

    const html = recipe_detail?.tList.map((data,index)=>
        <table className={"table"} key={index}>
            <tbody>
            <tr>
                <td className={"text-left"} width={"80%"}><h4>{data}</h4></td>
                <td className={"text-right"} width={"20%"}>
                    <img src={recipe_detail?.iList[index]} style={{width:'130px',height:'100px'}}/>
                </td>
            </tr>
            </tbody>
        </table>
    )

    return(
        <div className={"container"}>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td className={"text-center"}>
                            <img src={recipe_detail?.vo.poster} style={{"width": "800px", "height": "450px"}} className={"img-rounded"} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} className={"text-center"}>
                            <h3>{recipe_detail?.vo.content}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>{recipe_detail?.vo.info1}</td>
                        <td className={"text-center"}>{recipe_detail?.vo.info2}</td>
                        <td className={"text-center"}>{recipe_detail?.vo.info3}</td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td><b>[조리방법]</b></td>
                    </tr>
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td colSpan={2}><b>[쉐프정보]</b></td>
                    </tr>
                    <tr>
                        <td width={"20%"} rowSpan={2}>
                            <img src={recipe_detail?.vo.chef_poster} style={{width:'130px',height:'130px'}}/>
                        </td>
                        <td width={"80%"}>
                            {recipe_detail?.vo.chef}
                        </td>
                    </tr>
                    <tr>
                        <td width={"80%"}>{recipe_detail?.vo.chef_profile}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recipedetail;