/*
    React : 화면 구현 => MVC구조의 view => 화면 UI
            Redux동작
            1) 사용자 요청
               dispatch(함수호출)
                        | action에 등록된 함수
               => useEffect(()=>{})
               => reducer를 호출하기 위해서는 반드시 dispatch()
                  => vuex : action을 호출 => commit()
            2) action함수는 axios => 서버를 연결
               | 실제 사용자가 요청한 데이터를 서버로부터 읽기
            3) reducer로 전송
               ------- state에 저장
                       | state / props / 지역변수
                           |       |        | 필요시에만 사용하고 사라진다 (HTML에 전송이 불가능)
                           |       | component => component로 데이터 전송
                           |         => <App> => <List> => function List(props)
                           |              | => 매개변수 전송
                           |            <List name="">
                           |         => a.jsp => b.jsp
                           |              b.jsp?name=aaa
                           | 변경이 가능 => HTML에 적용
            4) 저장 state => store에 저장
                             | 전역변수 => 모든 component에서 공유
            store => 단뱡향 => 양방향

            Redux =>
                  단점 : 사용이 복잡 / 분석이 어렵다
                  장점 : 분업화, 데이터 관리 / 화면 출력
                        재사용이 가능, 파일 분리
            => 보완
               react-query => tanstack-query (open)
                              : typescript
               | 최근 많이 사용
            => vue / react / next
            CI/CD, Spring-Boot, SQL, Mybatis, JPA
            --------------------------------------
            | 설정 / 사용법 / 흐름 => 오더
 */
import {
    BOARD_LIST,
    BOARD_UPDATE,
    BOARD_DELETE,
    BOARD_DETAIL,
    BOARD_UPDATE_OK,
    BOARD_DELETE_OK,
    BOARD_INSERT,
    RESET
} from "./types";
import axios from "axios";

export const boardList = (page) => dispatch => {
    axios.get(`http://localhost/board/list_react/${page}`)
        .then(res => {
            const action ={
                type: BOARD_LIST,
                payload:res.data
            }
            // reducer로 전송
            dispatch(action);
        })
}

export const boardInsert = (insertData) => dispatch =>{
    axios({
        method: 'POST',
        baseURL: `http://localhost`,
        url: `/board/insert_react`,
        data: insertData,
        headers: {
            "Content-Type": "application/json",
        }

    })
    .then(res => {
        const action={
            type:BOARD_INSERT,
            payload:res.data
        }
        dispatch(action);
    })
}

export const boardReset = () => dispatch => {
    const action={
        type:RESET,
        payload:{}
    }
    dispatch(action);
}
// types => actions => reducer => store => component
// 상세보기
export const boardDetail = (no) => dispatch => {
    axios.get(`http://localhost/board/detail_react/${no}`)
    .then(res => {
        const action={
            type:BOARD_DETAIL,
            payload:res.data
        }
        dispatch(action);
    })
}
// 수정
export const boardUpdate = (no) => dispatch => {
    axios.get(`http://localhost/board/update_react/${no}`)
    .then(res => {
        const action = {
            type:BOARD_UPDATE,
            payload:res.data
        }
        dispatch(action);
    })
}
export const boardUpdateOk = (updateData) => dispatch => {
    axios({
        method: 'PUT',
        baseURL: `http://localhost`,
        url: `/board/update_react_ok`,
        data:updateData,
        headers:{
            'Content-Type': 'application/json'
        }

    }).then(res => {
        const action={
            type:BOARD_UPDATE_OK,
            payload:res.data
        }
        dispatch(action);
    })
}
// 삭제
export const boardDelete = (no, pwd) => dispatch => {
    axios.delete(`http://localhost/board/delete_react/${no}/${pwd}`)
        .then(res => {
            const action={
                type:BOARD_DELETE,
                payload:res.data
            }
            dispatch(action);
        })
}