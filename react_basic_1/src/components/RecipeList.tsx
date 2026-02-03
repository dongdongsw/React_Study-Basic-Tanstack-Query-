import {useState, useEffect} from 'react';
import axios from 'axios';
import {Recipe,RecipeProps} from "../types";
/*
    필요한 interface / axios (공통으로 사용)
    -------------------------------------
    | tanStackQuery
    | bootstrap => react용 <Pagination total="100" rownum="12">
 */
function RecipeList() {
    const [curpage, setCurpage] = useState<number>(1);
    const [data, setData] = useState<RecipeProps>();

    useEffect(() => {
        axios.get(`http://localhost/recipe/list_react/${curpage}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);

        })

    }, [curpage]);

    const prev=():void =>{
        if(data){
            setCurpage(data && data?.startPage-1)
        }
    }
    const next =():void => {
        if(data){
            setCurpage(data && data?.endPage+1)
        }
    }
    const pageChange = (page:number):void=>{
        if(data){
            setCurpage(page);
        }
    }


    const pageArr=[]
    // data != null && data.startPage != undefine가 아닌경우
    if(data && data?.startPage > 1){
        pageArr.push(
            <li><a className={"nav-link"} onClick={prev}>&laquo;</a></li>
        )
    }
    if(data){
        for(let i = data.startPage; i <= data.endPage; i++) {
            pageArr.push(
                <li><a className={"nav-link"} onClick={() => pageChange(i)}>{i}</a></li>
            )
        }
    }
    if(data && data?.endPage < data?.totalpage){
        pageArr.push(
            <li><a className={"nav-link"} onClick={next}>&raquo;</a></li>
        )
    }

    const html:any=data?.list.map((recipe:Recipe)=>
        <div className="col-md-3">
            <div className="thumbnail">
                <a href="#">
                    <img src={recipe.poster} alt="Lights" style={{"width":"100%","height":"150px"}}
                        title={recipe.title}
                    />
                    <div className="caption">
                        <p>{recipe.chef}</p>
                    </div>
                </a>
            </div>
        </div>
    )

    // html이 아니고 xml => 파싱해서 htmlk로 변경 (render) => index.html <div id="root"> 변경된 HTML청부</div>
    /*
        호출 => 함수(<함수명/>) : html고 구분 => 첫글자 대문자
        => 단방향
     */
    return(
        <div className="container">
            <div className="row">
                {html}
            </div>
            <div className="row text-center" style={{"height":"20px"}}>
                <ul className={"pagination"}>
                    {pageArr}
                </ul>
            </div>
        </div>

    )
}

export default RecipeList;