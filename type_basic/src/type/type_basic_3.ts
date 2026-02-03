// 기본 타입

let num1:number = 10;
let num2:number = 10.5; // double => let num2 = 10.5 자동추론 (인식)
let company:string = "SIST"
let isCheck:boolean=false;
let x:any="hello"; // 어떤 데이터형인지 모르는 경우

// 배열
let names:string[]=["a","b"];
let arr:any[]=[1,2,"aa",true]

// (string|number|boolean)[]
// 튜플 => Row => 한개에 대한 정보를 모아서 처리 => 데이터베이스
let info:[string,number,string]=["홍길동",25,"010-1111-1111"]

// 열거형
enum Arrow{
    UP  ,
    DOWN  ,
    LEFT ,
    RIGHT
}
// 자동으로 순차적으로 번호가 부여 => 지정없는 경우 0번부터
console.log("이름:",info[0]);
console.log("나이:",info[1]);
console.log("전화:",info[2]);
console.log("UP",Arrow.UP);
// enum은 숫자가 자동 증가
// tuple은 순서 + 타입 고정
// any는 타입체크 포기 => 실무에서는 최소화

// 인터페이스 / type / function / optional
interface User{
    readonly id:number, // 읽기 전용
    name:string,
    age?:number // null, undefined
}

const user1:User = {
    id:1,
    name:'홍길동'
}

const user2:User = {
    id:2,
    name:"심청이",
    age:25
}

console.log("user1:",user1)
console.log("user2:",user2)
console.log("user1.age:",user1.age) // undefined

// type => VO
type Point={
    x:number,
    y:number
}
const pt:Point = {x:10,y:20}
console.log("pt.x:",pt.x)
console.log("pt.y:",pt.y)
/*
 readonly => 객체가 생성이 되면 수정이 불가능
 age? => 선택 속성 => 값이 없어도 에러없음
 interface : 객체 구조 정의 => 확장이 가능
 type : 유니온 + 함수타입

 -----------------------------------------
                interface       type
 -----------------------------------------
    함수           가능            가능
 -----------------------------------------
    객체 확장       가능          불가능
 -----------------------------------------
    선언(병합)      가능          불가능
 -----------------------------------------

 */

// interface 함수 사용 / 함수 오버라이딩
interface Calc{
    (a:number,b:number):number
}
const add1:Calc=(a,b)=>{
    return a+b;
}
console.log(add1(10,20))

// type => 객체 => gkatn + qustn
type AddFnType=(a:number,b:number)=>number;
const add2:AddFnType=(x:number,y:number)=>x+y;
console.log(add2(100,200))
/*
    변수를 모아서 => interface
    함수를 모아서 => type
    실무 => 함수 (type), 변수(인터페이스)

 */

interface CalcEx extends Calc{
    // (a:number,b:number):number
    desc:string;
}
// 객체 선언
const add3:CalcEx = ((x,y)=>x+y) as CalcEx;
add3.desc = "더하기"
console.log(add3.desc, add3(100,200))

// type도 확장이 가능
type CalcType = (x:number,y:number)=>number;
type CalcTypeEx = CalcType & {
    desc:string
}

const add4:CalcTypeEx = ((x,y)=>x+y) as CalcTypeEx;
add4.desc="type 더하기"
console.log(add4.desc, add4(1000,2000));
// 가독성이 떨어진다 => interface 확장