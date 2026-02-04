import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import apiClient from "../../commons/http-commons";
import {RecipeDetailVO,RecipeDetailProps} from "../../types";

function RecipeDetail(){
    const {no} = useParams<{no:string}>();
    const nav = useNavigate();
    const [detail, setDetail] = useState<RecipeDetailProps>();

    useEffect(() => {
        const fetchDetail= async()=>{
            const res = await apiClient.get(`/recipe/detail_react/${no}`);
            console.log(res.data);

            setDetail(res.data);
            return res.data;
        }
        fetchDetail();
    }, [no]);

    // 조리법 => html => xml형식으로 제작 => render => html로 변환
    // tsx => typescrip+xml
    const html = detail?.cList.map((data,index)=>
        <table className={"table"} key={index}>
            <tbody>
                <tr>
                    <td className={"text-left"} width={"80%"}><h4>{data}</h4></td>
                    <td className={"text-right"} width={"20%"}>
                        <img src={detail?.iList[index]} style={{width:'130px',height:'100px'}}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )

    return(
        <div className={"container"}>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td className={"text-center"}>
                            <img src={detail?.vo.poster} style={{"width": "800px", "height": "450px"}} className={"img-rounded"} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} className={"text-center"}>
                            <h3>{detail?.vo.content}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>{detail?.vo.info1}</td>
                        <td className={"text-center"}>{detail?.vo.info2}</td>
                        <td className={"text-center"}>{detail?.vo.info3}</td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td><b>[조리방법]</b></td>
                        </tr>
                        <tr>
                            <td>
                                {html}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td colSpan={2}><b>[쉐프정보]</b></td>
                        </tr>
                        <tr>
                            <td width={"20%"} rowSpan={2}>
                                <img src={detail?.vo.chef_poster} style={{width:'130px',height:'130px'}}/>
                            </td>
                            <td width={"80%"}>
                                {detail?.vo.chef}
                            </td>
                        </tr>
                        <tr>
                            <td width={"80%"}>{detail?.vo.chef_profile}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecipeDetail;