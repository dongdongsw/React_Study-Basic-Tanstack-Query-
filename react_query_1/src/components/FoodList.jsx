import {useState, useEffect} from 'react'
import {useQuery} from "@tanstack/react-query";
import apiClient from "../http-commons";
import ListImage from "../commons/ListImage";
import PagePrint from "../commons/PagePrint";


function FoodList(){
    // 데이터 읽기 => ListImage
    // 변수
    const [curpage, setCurpage] = useState(1);

    // react-query 연동 [curpage]
    /*
        useEffect (()=>{

        },[])
     */
    const {isLoading, isError, error, data} = useQuery({
        queryKey: ["food_list" + curpage],
        queryFn: async () =>{
            return await apiClient.get(`/food/list_react/${curpage}`)
        }

    });
    if(isLoading){
        return <h1 className={"text-center"}> Loading ...</h1>
    }
    if(isError){
        return <h1 className={"text-center"}>{error.message}</h1>
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                {
                    data.data.list && data.data.list.map((item, index) =>
                        <ListImage item={item} key={index} move={"food"}/>
                    )
                }
            </div>

            <div className={"row text-center"} style={{"marginTop":"10px"}}>
                <PagePrint setCurpage={setCurpage} data={data.data} page={curpage}/>
            </div>
        </div>
    )
}

export default FoodList;