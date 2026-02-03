
// 자동응로 데이터형 인식 => 데이터형이 다르면 오류 발생
// 실무에선는 소스를 줄이기 위해서 타입 추론에 맡긴다
// parameter는 반드시 사용한다 => 타입 지정
function add(a:number,b:number){
    return a+b; // return값만 추론
}

// 타입을 최대한 알아서 추론(자동인식)
// 애매한 데이터 => 개발자 책임
// 초기값 기준에서 타입 추론
/*
    Optional Chain : null/undefined를 방지
    data?.           --------------
 */
// union type
let cc:number|string = "aaa"
console.log(cc)
cc = 100
console.log(cc)