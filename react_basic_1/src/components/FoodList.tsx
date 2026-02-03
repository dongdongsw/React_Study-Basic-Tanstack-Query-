import {useState, useEffect} from "react";
import axios from "axios";

// VO
interface Food {
    fno:number;
    name:string;
    poster:string;

}
// Map에 등록한 내용과 일치
interface FoodListProps {
    curpage:number;
    totalpage:number;
    startPage:number;
    endPage:number;
    list:Food[];
}

// useEffect() = rendering = setXxx() = return을 rendering 후 전송
function FoodList() {
    const [curpage, setCurpage] = useState<number>(1);
    const [data, setData] = useState<FoodListProps>();

    useEffect(() => {
        axios.get(`http://localhost/food/list_react/${curpage}`)
        .then(res =>{
            console.log(res.data);
            setData(res.data);
        })
    }, [curpage]); // 재호출 [] : mounted(), [변수] -> 재호출

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
    // data?.startPAge => data 가 null / undeifined 가 아니면 startPage에 반환
    // data가 null이거나 undefined이면 에러없이 undefined를 반환
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

    const html:any=data?.list.map((food:Food)=>
        <div className="col-md-3">
            <div className="thumbnail">
                <a href="#">
                    <img src={food.poster} alt="Lights" style={{"width":"100%","height":"150px"}} />
                    <div className="caption">
                        <p>{food.name}</p>
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

export default FoodList;