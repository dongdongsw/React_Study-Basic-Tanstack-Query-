import {useState, Fragment, useEffect, ReactElement} from "react";

// 배열
function App3(){
    const [img,setImg] = useState<string[]>();
    const images:string[]=[
        "https://img.megabox.co.kr/SharedImg/2025/12/26/hgy5aqAyPAISQGabYFQCfN3cQp0pVWrc_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/15/xlMKoNV9stZD0rpyynZmnvRS2zDbQtyp_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2026/01/28/K4tqYfZ2HDsAwAk9aWfNniZ4eJeq9S30_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2025/11/26/6tAiMzbHCFRIda2pnPZxeJh7lzX2AaIB_420.jpg",
        "https://img.megabox.co.kr/SharedImg/2025/11/25/v344HrDrKIU3iFAbZWMwLssegzKFKdZ7_420.jpg"
    ]
    useEffect(() => {
        setImg(images);
    });

    /*
        Element         DOM (document.createElement()) 일반 태그
        JSX.Element     JSX 변환
        ReactElement    React 컴포넌트 반환
     */
    /*
    const html:ReactElement[]|undefined=img?.map((movie:string):ReactElement[]=>{
        <img src={movie}
             style={{"width":"150px;", "height":"200px;"}}
             key={movie}/>
    })
    */
    // 타입을 사용하지 않는다
    const html = img?.map((movie: string) => (
        <img
            key={movie}
            src={movie}
            style={{ width: "150px", height: "200px" }}
        />
    ));

    return(
        <Fragment>
            {html}
        </Fragment>
    )
}

export default App3;