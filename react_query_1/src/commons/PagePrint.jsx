function PagePrint({data,curpage,setCurpage}){
   let totalpage = data.totalpage;
   let startPage = data.startPage;
   let endPage = data.endPage;

   const prev = () =>{
      setCurpage(startPage - 1)
   }
   // 함수가 데이터형이기 때문에 매개변수로 전송이 가능

   const next = () =>{
      setCurpage(endPage + 1)
   }

   const pageChange = (i) =>{
      setCurpage(i)
   }

   // 공통기반 , 지도
   let pageArr = []
   if(startPage > 1){
      pageArr.push(
          <li><a className={"a-link"} onClick={prev}>&laquo;</a></li>
      );
   }

   for(let i=startPage; i<=endPage; i++){
      pageArr.push(
          <li className={i === data.curpage?'active':''}><a className={"a-link"} onClick={()=>pageChange(i)}>{i}</a></li>
      )
   }

   if(endPage < totalpage){
      pageArr.push(
          <li><a className={"a-link"} onClick={next}>&raquo;</a></li>
      );
   }

   return(
       <ul className={"pagination"}>
          {pageArr}
       </ul>
   )
}

export default PagePrint;