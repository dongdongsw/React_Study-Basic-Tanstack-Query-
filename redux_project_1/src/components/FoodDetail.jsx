import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {fetchFoodDetail} from "../actions/foodActions";

function FoodDetail(){
    const {fno} = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        dispatch(fetchFoodDetail(fno))
    }, []);

    const food_detail = useSelector(state => state.foods.food_detail);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <table className={"table table-striped"}>
                    <tbody>
                        <tr>
                            <td width={"30%"} className={"text-center"} rowSpan={8}>
                                <img src={food_detail.poster} style={{"width": "350px","height": "300px"}} />
                            </td>
                            <td colSpan={2}><h3>{food_detail.name}&nbsp;<span style={{"color":"orange"}}>{food_detail.score}</span></h3></td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>주소</td>
                            <td width={"60%"}>{food_detail.address}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>전화</td>
                            <td width={"60%"}>{food_detail.phone}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>음식종류</td>
                            <td width={"60%"}>{food_detail.type}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>가격대</td>
                            <td width={"60%"}>{food_detail.price}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>영업시간</td>
                            <td width={"60%"}>{food_detail.time}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>주차</td>
                            <td width={"60%"}>{food_detail.parking}</td>
                        </tr>
                        <tr>
                            <td width={"10%"} className={"text-center"}>테마</td>
                            <td width={"60%"}>{food_detail.theme}</td>
                        </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td>{food_detail.content}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td  className={"text-right"}>
                                <button className={"btn btn-primary"} onClick={()=> nav(-1)}>목록</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FoodDetail;