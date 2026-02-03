/*
    함수 : 기능을 수행
            typescript => 컴파일 => javascript 변환
                                    => 데이터형 설정
    --------------------------------
          리턴형             매개변수
    --------------------------------
            O                  O
        function func(a,b)
        {
            return a+b
        }
        function func(a:number,b:number):number => 결과값은 추론
        {
            return a + b
        }
    --------------------------------
            O                  X
        function func():number
        {
            return 숫자
        }
    --------------------------------
            X                  O
        function func(name:string):void
        {
            리턴형이 없음
        }
    --------------------------------
            x                  x
        function func():void
        {

        }
    --------------------------------

    const func=(a:number,b:number):number=>a+b
    const func=function(a:number,b:number){
        return a+b

    }

 */
function addNum(x:number,y:number):number{
    return x+y;
}
console.log(addNum(1000,2000));

function log(msg:string,userId?:string){
    console.log(msg,userId);
}
log("hello typeScript",  "admin")
log("hello typeScript")
// 선택적 매개변수 ? => 뒤에만 가능

// @ts-ignore
function padding(x:number):void;
function padding(x:number,y:number):void;
function padding(x:number,y:number){
    console.log(x,y);
}
padding(10)
padding(10,20)