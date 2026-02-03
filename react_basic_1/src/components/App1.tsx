import {useState,useEffect} from 'react'
// useState => Vue(data(){})
// 관리 목적 = 사라지지 않는 변수   let / const
/*
    1. react : 상태 관리 프로그램
         |      ---- 변수(데이터)
         |
         redux : M(데이터) V(화면출력)
          |  = Pinia (actions, state, mutation)
       tanStackQuery : 실무에서 가장 많이 사용
            | 데이터형 일치 : typescript
            | View 역할 (화면 UI) => 데이터 읽기?
                                    서버 : Spring-boot / node / django
       => 1. 형식
            클래스 기반 / 함수 기반
                            | Hooks
            => HTML의 태그는 소문자 사용
            => 함수는 첫자가 대문자
       => 2. 처리
            import 사용
            function funcName(){
                변수 설정 : useState
                처리
                return{
                    HTML 출력 => index.html
                }
            }
            호출 => <함수명/>
       => 3. 가상 돔 : 관리 영역을 저장 = 실제 브라우저에 출력됨 돔과 비교
                            |               |
                            -----------------
                                    |비교 => diff => Vue와 동일
       => 4. HTML출력 => XML문법을 사용
              1) 루트는 반드시 1개만 사용
              2) 반드시 속성값 = ''. ""
                   <img src={vo.poster}>
                   =>sty;le={{속성 : 값....}}
                   => <img/> <input/> <br/> <p/> ...
              3) 여는 태그 + 닫는 태그가 동일

       => 데이터 출력 : {}
       => 반복문 : map / forEach
       => return 안에는 {}
       => 파일명과 함수명과 클래스명은 동일
       => 한번 실행 / 데이터 변경시 실행
            | useEffect(()=>{}) => mounted
            | useEffect(()=>{}, [page])
 */

function App1(){
    // 변수 선언
    const [name, setName] = useState<string>('홍길동');
    const [age, setAge] = useState<number>(20);

    useEffect(() => {
        //mounted()
        setName("심청이")
        setAge(25)
    }, []);

    return (
        <>
            <div>
                <h3 style={{"color":"blue"}}>{name}</h3>
            </div>
            <div>
                <h3>{age}</h3>
            </div>
        </>
    )

}

export default App1;