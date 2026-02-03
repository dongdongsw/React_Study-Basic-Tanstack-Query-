
export interface Recipe{
    no:number;
    hit:number;
    likecount:number;
    jjimcount:number;
    replycount:number;
    title:string;
    poster:string;
    chef:string;
    link:string;
}

export interface RecipeProps{
    list:Recipe[];
    endPage:number;
    startPage:number;
    totalpage:number;
    curpage:number;
}

