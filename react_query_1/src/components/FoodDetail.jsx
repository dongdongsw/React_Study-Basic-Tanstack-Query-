import {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import apiClient from "../http-commons"
import {useQuery} from "@tanstack/react-query";
/*
    SELECT : useQuery
    INSERT / UPDATE / DELETE : useMutation

    nav => nav(-1) history.back()
           nav('/food/list')
 */
function FoodDetail(){
    const {fno} = useParams(); // 이전 화면에서 데이터 전송 => getParameter
    const nav = useNavigate(); // 화면 이동
    const {isLoading, isError, error, data} = useQuery({
        queryKey: [`food_detail` + fno],
        queryFn: async () => {
            return await apiClient.get(`/food/detail_react/${fno}` );
        }
    });

    if(isLoading){
        return <h1 className={"text-center"}> Loading ...</h1>
    }
    if(isError){
        return <h1 className={"text-center"}>{error.message}</h1>
    }


    return (
        data.data &&
        <div className={"container"}>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td className={"text-center"} rowSpan={8}>
                                <img src={data.data.poster} style={{"width":"350px", "height":"250px"}} />
                            </td>
                            <td colSpan={2}>
                                <h3>{data.data.name}&nbsp;<span style={{"color":"orange"}}>{data.data.score}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>주소</th>
                            <td width={"60%"}>{data.data.address}</td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>전화</th>
                            <td width={"60%"}>{data.data.phone}</td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>음식종류</th>
                            <td width={"60%"}>{data.data.type}</td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>가격대</th>
                            <td width={"60%"}>{data.data.price}</td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>영업시간</th>
                            <td width={"60%"}>{data.data.time}</td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>주차</th>
                            <td width={"60%"}>{data.data.parking}</td>
                        </tr>
                        <tr>
                            <th className={"text-center"} width={"10%"}>테마</th>
                            <td width={"60%"}>{data.data.theme}</td>
                        </tr>
                    </tbody>
                </table>

                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td>{data.data.content}</td>
                        </tr>
                        <tr>
                            <td className={"text-right"}>
                                <button className={"btn-sm btn-primary"} onClick={()=> nav(-1)}>목록</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FoodDetail;