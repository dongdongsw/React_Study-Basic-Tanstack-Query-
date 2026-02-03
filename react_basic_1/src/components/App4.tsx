import {useState,useEffect,Fragment} from "react";
/*
    기본 :
            일반 변수 = 지역 변수
            let / const ... 변경해도 HTML에 반영이 안된다.
            useState = 변경시에는 HTML에 바로 반영

            class App4 extends React.Component{
                state={

                }
                componenetDidMount(){

                }
            }

            ==>
            Vue.createApp({
                data(){
                    return {
                        변수 ==> HTML에 반영되는 데이터 모음
                    }
                },
                mounted(){
                    let a = 10;
                }
            })
 */
type Movie = {
    name: string,
    score:number
}
function App4() {
    // 데이터 갱신 => HTML에 반영 useState
    // 한번만 출력 => 지역변수

/*
    let data:Movie={
        name:'홍길동전',
        score:4.5
    }*/

    const [data, setData]=useState<Movie>({
        name:'',
        score:0
    });

    /*
    const [data, setData] = useState<Movie>({
        name:'',
        score:0
    });
    객체 초기화

    const [data, setData] = useState<number>(0)
    const [data, setData] = useState<string>('')

    const [page, setPage] = useState<number>(1)
    const [fd, setFd] = useState<number>('마포')
    const [total, setTotal] = useState<number>(0)

    const [data, setData] = useState<Movie[]>()

    => 생성자
        useEffect(()=>{

        },[curpage])
              | curpage가 변경이 될떄마다 안에있는 내용을 재호출
              CallBack 함수 호출
    */

    useEffect(() => {
        setData({
            name:'심청전',
            score:4.7
        })


    }, []);



    return(
        <Fragment>
            <h1>이름:{data?.name}</h1>
            <h1>평점:{data?.score}</h1>
        </Fragment>
    )
}

export default App4;