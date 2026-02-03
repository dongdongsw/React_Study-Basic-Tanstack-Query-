// 제네릭 <>
function getArray<T>(items:T[]):T[]{

    return new Array().concat(items);
}

let num = getArray<number>([1,2,3,4,5]);
console.log(num);
let strArr = getArray<string>(["a","b","c"]);
console.log(strArr);
// T => 나중에 타입을 결정한다. => 타입을 매개변수로 받은 함수
/*
    class Box<T>
    {
        T t;
    }

    Box<String> => 데이터형의 통일

 */

// 가장 많이 사용
interface Users{
    no?:number,
    name?:string,
    email?:string
}

function updateUsers(users:Partial<Users>):void{
    console.log("수정요청",users);
}
updateUsers({name:"홍길동"})
updateUsers({no:1})
updateUsers({email:"hong@co.kr"})
/*
    Required<Users> : 모든 변수값 필수 => 모든 변수 입력값이 존재
    Readonly<Users> : 모든 변수를 읽기 전용
    Omit<Users,"email"> : 특정 필드를 제거
    Pick<User, "id"|"name"> : 필요한 것만 선택
    Partial<Users> : 모든 변수가 ? => 수정
 */

interface Food{
    fno:number,
    name:string,
    poster:string,
    address:string,
    phone:string
}
/*
// Readonly
function readonlyUsers(users:Readonly<Users>):void{
    console.log("읽기전용요청",users);
}
const food:Food={
    fno:1,
    name:"맛집",
    poster:"a.jpg",
    address:"서울",
    phone:"1111-1111"
}

readonlyUsers(food)
*/
type FoodType = Pick<Food,"name"|"poster"|"address">
const foodView:FoodType = {
    name:"aaa",
    poster:"BBB",
    address:"CCC"
}
console.log(foodView);

type FoodType2 = Omit<Food,"address">
const aaa:Food={
    fno:1,
    name:"맛집",
    poster:"a.jpg",
    phone:"1111-1111"
}
console.log(aaa); // Omit => 필요없는 속성 제거
// 비밀번호, JWT 토큰, 권한 정보 => 필수

function greet(name:string,age:number){
    return `Hello, ${name}!! 나이는 ${age}`
}

type Greetype = Parameters<typeof greet>
// [string, number] = tuple
const params:Greetype = ["홍길동",20]
console.log(params);
// parameters => 튜플로 변환


let name2 ="심청이" // string 추론
let age2 = 10
let isS = true
let nums = [1,2,3]
let max = [1,"a",true]
// 함수 리턴형은 대부분 자동 추론
// 복잡한 로직 => 명시적으로 사용 : NodeJS