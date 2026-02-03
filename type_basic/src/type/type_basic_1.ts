let str:string = '홍길동';
// 변수명 : 데이터형 설정
console.log(str);

let a:number=100
console.log(a)
let b:number=10.5
console.log(b)

let c:boolean = true
console.log(c)

let d : object={"name":"홍길동","age":20}
console.log(d)

let e:number[]=[10,20,30,50]
console.log(e)

/*
	private int fno, hit, jjimcount, likecount, replycount;
	private String name, type, phone, address, theme, price, time, parking, poster, images, content;
	private double score;

	interface FoodVO{
	    fno:number,
	    hit:number,
	    name:string,
	    type:string,
	    ...
	    score:number
	}
 */

/*
    1. typescript
        = javascript는 실행전에 오류를 알기 어렵다.
        = typescript는 컴파일 단계에서 오류 검출
        = javascript의 단점은 필요시에 데이터형 변경이 가능
        = typescript는 데이터형 고정
            let a : number
                안전성 / 가독성
        = js + 타입 검사기 = ts
        = ts => 컴파일 => js 변경

        = 타입스크립트에서 지원하는 기본형 / 함수
            string : 문자열
            number : 숫자 => int/double
            boolean : true / false
            object : {}
            array : []
            tuple : let tu:[string,number]=['hi',10] = map
            enum : 상수의 집합
            null : 값이 없는 상태
            undefined : 선언이 안된 변수
            any : 모든 타입을 사용할 수 있는 타입
            void : function에서 return 갑이 없는 경우

           사용자 정의
           interface / type
           => VO
           => 제네릭을 이용해서 처리
 */