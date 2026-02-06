import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {boardDetail} from "../actions/boardActions";

function BoardDetail() {
    const {no} = useParams()
    const dispatch = useDispatch();
    const nav  = useNavigate();

    useEffect(()=>{
        dispatch(boardDetail(no));
    },[])

    const details = useSelector((state)=>state.boards.board_detail)

    return (
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>번호 : {no}</h3>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <th className={"text-center success"} width={"30%"}>번호</th>
                            <td className={"text-center"} width={"20%"}>{details.no}</td>
                            <th className={"text-center success"} width={"30%"}>작성일</th>
                            <td className={"text-center"} width={"30%"}>{details.regdate}</td>
                        </tr>
                        <tr>
                            <th className={"text-center success"} width={"30%"}>이름</th>
                            <td className={"text-center"} width={"20%"}>{details.name}</td>
                            <th className={"text-center success"} width={"30%"}>조회수</th>
                            <td className={"text-center"} width={"30%"}>{details.hit}</td>
                        </tr>
                        <tr>
                            <th className={"text-center success"} width={"30%"}>제목</th>
                            <td colSpan={3}>{details.subject}</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className={"text-left"} height={"200px"} valign={"top"}>
                                <pre style={{"whiteSpace": "pre-wrap", "backgroundColor": "white", "border": "none"}}>{details.content}</pre>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className={"text-right"}>
                                <Link to={"/board/update/" + details.no} className={"btn-xs btn-primary"}>수정</Link>
                                <Link to={"/board/delete/" + details.no} className={"btn-xs btn-warning"}>삭제</Link>
                                <Link to={"/board/list"} className={"btn-xs btn-info"}>목록</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoardDetail;