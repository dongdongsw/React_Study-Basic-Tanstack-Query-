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