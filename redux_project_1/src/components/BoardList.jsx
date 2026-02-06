import {useDispatch, UseDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {boardList} from "../actions/boardActions";
import {Link} from "react-router-dom";

function BoardList(){
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);

    useEffect(()=>{
        dispatch(boardList(curpage))
    },[curpage])

    /*
        deps : [] => 한번만 수행
        deps : [useState변수] => 변수가 변경시마다 재호출
                ------------ 데이터가 변경 => 처리 (상태)
                ------------ HTML에 바로 적용
     */

    // store에 저장된 값을 읽어온다
    const board_list = useSelector((state) => state.boards.board_list.list);
    const totalpage = useSelector((state) => state.boards.board_list.totalpage);

    /*
        useEffect() => 재호출 => 반드시 setXxx => setState
     */

    // 이베트 처리
    const prev=()=>{
        setCurpage(curpage > 1? curpage-1 : curpage)
        // 자동으로 useEffect 호출
    }
    const next=()=>{
        setCurpage(curpage < totalpage? curpage+1 : curpage)
    }

    return(
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>Redux 게시판</h3>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td>
                                <Link to={"/board/insert"} className={"btn btn-sm btn-primary"}>새글</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={"table table-striped"}>
                    <thead>
                        <tr className={"danger"}>
                            <th className={"text-center"} width={"10%"}>번호</th>
                            <th className={"text-center"} width={"45%"}>제목</th>
                            <th className={"text-center"} width={"15%"}>이름</th>
                            <th className={"text-center"} width={"20%"}>작성일</th>
                            <th className={"text-center"} width={"10%"}>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            board_list && board_list.map((vo,index)=>
                                <tr key={index}>
                                    <td className={"text-center"} width={"10%"}>{vo.no}</td>
                                    <td width={"45%"}><Link to={"/board/detail/" + vo.no}>{vo.subject}</Link></td>
                                    <td className={"text-center"} width={"15%"}>{vo.name}</td>
                                    <td className={"text-center"} width={"20%"}>{vo.dbday}</td>
                                    <td className={"text-center"} width={"10%"}>{vo.hit}</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td colSpan={5} className={"text-center"}>
                                <button className={"btn btn-sm btn-warning"} onClick={prev}>이전</button>
                                {curpage} page / {totalpage} pages
                                <button className={"btn btn-sm btn-warning"} onClick={next}>다음</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default BoardList;