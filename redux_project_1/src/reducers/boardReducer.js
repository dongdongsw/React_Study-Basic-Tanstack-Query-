import {BOARD_LIST,BOARD_UPDATE,BOARD_DELETE,BOARD_DETAIL,BOARD_UPDATE_OK,BOARD_DELETE_OK,BOARD_INSERT, RESET} from "../actions/types";

/*
    Java = JavaScript
    Map => {}
    List => []
    VO => {}
    String => ''

    const {isLoading, isError, data, refetch:함수} =  useQuery({
        async() => await axios....
    })

    if(isLoading)
    if(isError)

    return(

    )

 */

const boardState={
    board_list: {}, // Map
    board_detail: {}, // BoardEntity
    board_update: {},
    result:{} // yes, no
}
/*
    let arr = [1,2,3,4,5]
    let arr1 = [...arr, 6,7,8]
 */
export default function(state = boardState, action){
    switch(action.type){
        case BOARD_LIST:
            return{
                ...state, // state 유지
                board_list:action.payload
            }
        case BOARD_INSERT:
            return{
                ...state,
                result:action.payload
            }
        case BOARD_DETAIL:
            return{
                ...state,
                board_detail:action.payload
            }
        case BOARD_UPDATE_OK:
            return{
                ...state,
                result:action.payload
            }
        case BOARD_UPDATE:
            return{
                ...state,
                board_update:action.payload
            }
        case BOARD_DELETE:
            return{
                ...state,
                result:action.payload
            }
        case RESET:
            return{
                ...state,
                result:action.payload
            }
        default:
            return state;
    }
}