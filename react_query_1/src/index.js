import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

/*
    index.js ======= App.js ====== component ====== index.html
                                        | 화면 UI
                                        | 화면 출력 형식
    => react
        => 데이터 관리 문제 발생
        => View / 데이터 관리 분리 = Redux
        => 한개로 봉합 : react-query => 17 => 19
                       | 확상성, 기능 추가 => opensource
                            => tanStack-Query
        서버로부터 데이터 읽기 / 데이터 캐싱 , 캐시 제어
                                => 데이터를 저장 방법
                                => 효율적인 관리가 가능하게 만든 라이브러리
        저장기능
            1. 데이터 읽기 : axios를 이용해서 데이터 읽기
            2. 저장 기능이 가능 (캐싱) :  설정 => index.js (index.ts)
            3. 동일한 요청이 있는 경우 => 서버 연결없이 캐시에 저장된 데이터 읽기
                    => 이미 읽어온 데이터를 어느 정도 저장할지 설정
            4. 항상 새로운 데이터 유지
            5. 네트워크 재연결, 요청 실패시 자동 갱신

            useEffect(()=>{

            },[])
               | queryKey => 데이터 변경시마다 재호출
               | queryFn
            => 현재 실무 : view 출력 => ThymeLeaf / React
                           유지보수 : JSP
                           => CI / CD => jar
                           => Spring AI => 속도 => Vue/React
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
/*


 */
const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false,
            refetchOnMount:false,
            refetchOnReconnect:false,
            retry:false,
            staleTime:5*50*1000
        }
    }
});

/*
    staleTime : 오래된 데이터 => 서버 연결없이 데이터변경이 없는 경우 =>캐시 읽기
    new : 새로운 데이터

    efetchOnWindowFocus:false,
           브라우저 탭 이동
           => 다시 클릭 => 모든 useQuery를 재요청
           => 캐시에 있는 데이터 그대로 사용
           => 화면 깜박일 수 있다
           => 실무에서는 주로 false
    refetchOnMount:false,
            => 컴포넌트가 다시 마운트 될때 재요청을 하지 않는다
            => 상세보기 => back()
            => 새로고침
            => 서며연결 없이 화면
    refetchOnReconnect:false,
            => 인터넷이 끊기는 경우 => 재요청을 하면 => 화면중단
            => 이정 저장 화면을 보여준다
    retry:false,
            => 데이터 요청 => 실패한 경우 => 자동 재시도를 하지 않는다
    staleTime:5*50*1000
            => 5분동안 데이터 유지
            => 목록 => 서버 연결없이 캐시만 사용
*/
/*
    1. components
        FoodList
            |   useQuery
        [QueryClient]
            |   cache확인
        [Cache]
            | 없는 경우
        [axios => 서버 연결]
            |
        [Cache에 저장]
            |
        FoodList에 자동 업데이트

        Redux : 클라이언트 상태 => 비동기 (직접)
                재호출 : 직접 처리
                코드량이 많다
        Query : 서버 상태 => 자동
                재호출 : 자동
                코드량이 적다
        => 서버에서 데이터를 가지고 온 후 => 자동으로 캐싱한다
        => SELECT : useQuery
        => INSERT/UPDATE/DELETE : mutation
 */

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
