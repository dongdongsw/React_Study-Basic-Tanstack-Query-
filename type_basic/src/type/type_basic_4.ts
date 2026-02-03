/*

    @typedef {Object} Member
    @property {number} id
    @property {string} name
    @property {string} phone
 */
const mem={id:1,name:"홍길동",phone:"010-1111-1111"}
console.log(mem);
/*
    interface Member{
        id:number,
        name:string,
        phone:string
    }
 */

/**
    @typedef {Object} Member
    @property {number} id
    @property {number=} Age
 */
// 객체 생성
// = ? 같은 것
const s1 = {name:"Hong"}
console.log(s1);

const s2 = {name:"Hong", age:30}
console.log(s2);