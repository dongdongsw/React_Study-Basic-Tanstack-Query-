import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import apiClient from "../../commons/http-commons";
import KakaoMap from "../../commons/KakaoMap";

/*
    useState : 상태 저장 (데이터저장)
    useEffect : 실행 = 서버 연동
    useNavigate : 화면 이동
    useParams : 전송된 데이터 받기
 */
interface FoodDetailData {
    fno: number;
    name: string;
    type: string;
    address: string;
    phone: string;
    theme: string;
    price: number;
    time: string;
    parking: string;
    poster: string;
    images: string[];
    content: string;
    score: number;
    hit: number;
    jjimcount: number;
    likecount: number;
    replycount: number;
}

function FoodDetail() {
    const {fno} = useParams<{ fno: string }>()
    const nav = useNavigate()
    const [detail, setDetail] = useState<FoodDetailData | null>(null);
    useEffect(() => {
        const fetchDetail = async () => {
            const res = await apiClient.get(`/food/detail_react/${fno}`)
            console.log(res.data)
            setDetail(res.data)
            return res.data
        }
        fetchDetail()
    }, []);
    return (
        <div className={"container"}>
            <div className={"row"}>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td width={"30%"} rowSpan={8} className={"text-center"}>
                            <img src={detail?.poster} style={{"width": "320px", "height": "300px"}}/>
                        </td>
                        <td colSpan={2}>
                            <h3>{detail?.name}&nbsp;<span style={{"color": "orange"}}>{detail?.score}</span></h3>
                        </td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>주소</td>
                        <td width={"60%"}>{detail?.address}</td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>전화</td>
                        <td width={"60%"}>{detail?.phone}</td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>음식종류</td>
                        <td width={"60%"}>{detail?.type}</td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>영업시간</td>
                        <td width={"60%"}>{detail?.time}</td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>가격대</td>
                        <td width={"60%"}>{detail?.price}</td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>주차</td>
                        <td width={"60%"}>{detail?.parking}</td>
                    </tr>
                    <tr>
                        <td width={"10%"} style={{"color": "gray"}}>테마</td>
                        <td width={"60%"}>{detail?.theme}</td>
                    </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>{detail?.content}</td>
                    </tr>
                    <tr>
                        <td className={"text-right"}>
                            <button className={"btn-sm btn-primary"} onClick={() => nav(-1)}>목록</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {detail && <KakaoMap address={detail?.address} name={detail?.name}/>}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FoodDetail;