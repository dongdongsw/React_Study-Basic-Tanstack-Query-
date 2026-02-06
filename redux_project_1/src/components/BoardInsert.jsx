import {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {boardInsert, boardReset} from "../actions/boardActions";
import boardReducer from "../reducers/boardReducer";

function BoardInsert(){

    const nav = useNavigate();
    const dispatch = useDispatch();
    // ref => 태그 (input)
    const nameRef = useRef(null);
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const pwdRef = useRef(null);

    const [name,setName]=useState("");
    const [subject, setSubject]=useState("");
    const [content,setContent]=useState("");
    const [pwd, setPwd]=useState("");

    const insert = () =>{
        if(name.trim()===""){
            nameRef.current.focus();
            return
        }
        else if(subject.trim()===""){
            subjectRef.current.focus();
            return
        }
        else if(content.trim()===""){
            contentRef.current.focus();
            return
        }
        else if(pwd.trim()===""){
            pwdRef.current.focus();
            return
        }

        const params = {
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }
        dispatch(boardInsert(params))
    }

    const result = useSelector((state)=>state.boards.result);
    if(result && result==='yes'){
        nav('/board/list')
        dispatch(boardReset())
    }

    const cancel = () =>{
        nav('/board/list')
        dispatch(boardReset())
    }


    return(
        <div className={"container"}>
            <div className={"row"} style={{"width":"800px"}}>
                <h3 className={"text-center"}>글쓰기</h3>
                <table className={"table "}>
                    <tbody>
                        <tr>
                            <td className={"text-center"} width={"20%"}>이름</td>
                            <td width={"80%"}>
                                <input type={"text"} className={"input-sm"} size={20} ref={nameRef} onChange={(e)=>setName(e.target.value)} value={name}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className={"text-center"} width={"20%"}>제목</td>
                            <td width={"80%"}>
                                <input type="text" className={"input-sm"} size={50}  ref={subjectRef} onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className={"text-center"} width={"20%"}>내용</td>
                            <textarea cols={50} rows={10}  ref = {contentRef} onChange={(e)=>setContent(e.target.value)} value={content} ></textarea>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className={"text-center"} width={"20%"}>비밀번호</td>
                            <td width={"80%"}>
                                <input type="text" className={"input-sm"} size={10}  ref = {pwdRef} onChange={(e)=>setPwd(e.target.value)} value={pwd}/>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className={"text-center"} colSpan={2}>
                                <button className={"btn btn-sm btn-primary"} onClick={insert}>글쓰기</button>
                                <button className={"btn btn-sm btn-warning"} onClick={cancel}>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoardInsert;