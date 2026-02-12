import {useState, useEffect, Fragment, useRef} from 'react';
import {useQuery, useMutation} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import boardClient from "../../board-commons";
import {AxiosError, AxiosResponse} from "axios";
/*
    1. React개념 
        => 이론 / 실습
        => state(상태)에 따라 UI를 선언적으로 표현하는 컴포넌트 기반 라이브러리이다.
           데이터 변경
           1) 컴포넌트 기반 UI
           2) 가상돔 이용
           3) 데이터 변경시 자동 렌더링

   2. state/props
                ㄴ 전송을 받는 경우 (다른 컴포넌트에 데이터 전송)
                ㄴ <MapPrint address="" name="">
                ㄴ 데이터 변경이 불가능
                ㄴ function A(props)
                ㄴ props.address

        => 컴포넌트 내부 : useState => HTML에 반영
        => 필요시에 변경이 가능
        => 서버나 외부에서 들어오는 값을 관리 : 상태 관리

    3. useEffect(()=>{
            언제 실행되는지
       },[])
       => [] -> mount() => window.onload일시에 1회 실행
       => [curpage] => curpage변경이 될때마다 수행

   4. 가상 돔 : Vue / React
          -- 트리 형태
      => 성능의 최적화
      => state가 변경시마다 diff를 이용한 최소 렌더링

   5. TanStack-Query : 사용이유
      => 서버 상태 / 클라이언트 상태
      => 서버와 데이터 전송 상태를 관리
      => 캐싱 / 자동 refetch / loading, error 관리 기능
      => 중복 요청 방지 => [] 키
      => 비동기
    --------------------------------------------------
    6. staleTime / cacheTime
                   => 메모리에 남아있는 시간 => 시간이 지나면 자동 삭제
       => 새로운 데이터 저장 시간 : ~ 재요청을 하지 않는다
    7. useQuery / useMutation
                    => 호출시에만 사용이 가능 (POST, DELETE , PUT)
       => 자동 실행 : GET

    8. Node.js
       비동기 이벤트 구조 동시 요청 처리가 가능 => 서버사이드 (Front의 백엔드)
       cors : 다른 포트 이름
       ----------------------------------------------
       spring / spring boot 차이점
       ThymeLeaf / JSP => jar / war
       Mybatis / JPA
*/



interface BoardResponse {
    NO: number;
    NAME: string;
    SUBJECT: string;
    CONTENT: string;
    msg: string;
}

function BoardUpdate() {
    const {no} = useParams();
    const nav = useNavigate();

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [pwd, setPwd] = useState("");

    const nameRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);



    const {isLoading, isError, error, data} = useQuery<{data:BoardResponse}>({
        queryKey: ['board-updateData', no],
        queryFn: async() => {
            return boardClient.get(`/board/update_node?no=${no}`)
        }

    })
    const board = data?.data;
    useEffect(() => {
        if (board) {
            setName(board.NAME)
            setSubject(board.SUBJECT)
            setContent(board.CONTENT)
        }
    }, [board])

    // 수정
    const {mutate:boardUpdate} = useMutation({
        mutationFn: async() => boardClient.put(`/board/update_ok_node?no=${no}`,{
            no:no,
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }),
        onSuccess: (res:AxiosResponse<BoardResponse>) => {
            console.log(res);
            if(res.data.msg === 'yes'){
                window.location.href=`/board/detail/${no}`
            }
            else{
                alert("비밀번호가 틀리다.")
                setPwd("");
                pwdRef.current?.focus();
            }
        },
        onError: (err:AxiosError) => {
            console.log(err.message)
        }
    })

    const boardUpdateOk = () =>{
        if(!name.trim()){
            return nameRef.current?.focus();
        }
        if(!subject.trim()){
            return subjectRef.current?.focus();
        }
        if(!content.trim()){
            return contentRef.current?.focus();
        }
        if(!pwd.trim()){
            return pwdRef.current?.focus();
        }
        boardUpdate();
    }

    if(isLoading) {
        return <h1 className={"text-center"}>Loading ...</h1>
    }
    if(isError) {
        return <h1 className={"text-center"}>Error ...{error?.message}</h1>
    }





    return(
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>React-Query + TypeScript 수정하기</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcumb-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row"  style={{"width": "600px", "margin": "0px auto"}}>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td width={"15%"}>이름</td>
                                <td width={"85%"}>
                                    <input type={"text"} size={15}  className={"input-sm"} ref={nameRef} value={name} onChange={(e:any) :void => setName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"}>제목</td>
                                <td width={"85%"}>
                                    <input type={"text"} size={55}  className={"input-sm"} ref={subjectRef} value={subject} onChange={(e:any) :void  => setSubject(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"}>내용</td>
                                <td width={"85%"}>
                                    <textarea cols={55} rows={10} ref={contentRef} value={content} onChange={(e:any) :void  => setContent(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"}>비밀번호</td>
                                <td width={"85%"}>
                                    <input type={"password"} size={15}  className={"input-sm"} ref={pwdRef} onChange={(e:any) :void  => setPwd(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className={"text-center"}>
                                    <button className={"btn-primary btn-sm"} onClick={boardUpdateOk}>수정</button>
                                    <button className={"btn-warning btn-sm"} onClick={()=> nav(-1)}>취소</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default BoardUpdate;