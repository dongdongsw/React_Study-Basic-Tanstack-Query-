import {useState, useEffect, Fragment} from 'react';
/*
    useState,   : 데이터가 변경시에 HTML에 적용  
    useEffect   : 한번 / 반복 실행시 사용
    Fragment    : <> </> : 가상 루트 태그 제작

    Css존재
    <div class="container"> : 적용이 안됨
    <div className="container"> : 적용됨
 */
function App2(){
    let name:string="홍길동";
    let age:number=20;
    useEffect(() => {
        name ="심청이"
        age=25
    }, []);
    return(
        <Fragment>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <h3>{age}</h3>
            </div>
        </Fragment>
    )
}

export default App2;