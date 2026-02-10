/*
	NO          NOT NULL NUMBER
    TITLE                VARCHAR2(1024)
    IMAGE1               VARCHAR2(1024)
    IMAGE2               VARCHAR2(1024)
    X                    NUMBER(20,12)
    Y                    NUMBER(20,12)
    CONTENTID            NUMBER
    ADDRESS              VARCHAR2(300)
    CONTENTTYPE          NUMBER(2)
    HIT                  NUMBER
*/

export interface MainItem{
    contentid:number;
    title:string;
    address:string;
    image1:string;
    hit:number;
    contenttype:number
}

export interface TravelItem{
    contentid:number;
    title:string;
    address:string;
    image1:string;
    hit:number;
    contenttype:number
}

export interface MainData{
    main:MainItem;
    sList:TravelItem[];
    bList:TravelItem[];
    jList:TravelItem[];
}

export interface JejuItem{
    address:string;
    title:string;
    image1:string;
    x:number;
    y:number;
    hit:number;
    contenttype:number;
    contentid:number;
    restdate:string;
    infocenter:string;
    parking:string;
    msg:string;
    usetime:string;
}

export interface JejuData{
    list:JejuItem[];
    curpage:number;
    totalpage:number;
    startPage:number;
    endPage:number;
}