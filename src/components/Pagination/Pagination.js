import ReactPaginate from 'react-paginate';

// const Pagination =({pageNumber,setPageNumber,finalPg})=>{
//     console.log(finalPg,pageNumber);
//     const NextPage = ()=>{
//         if(pageNumber<finalPg){
//             setPageNumber((x)=>x+1);
//         }else{
//         }
//     }
//     const PrevPage = ()=>{
//         if(pageNumber===1){
//             setPageNumber(1)
//         }
//         else{
//             setPageNumber((x)=>x-1);
//         }
//     }

//     return(
//         <>
//             <button type="button" onClick={PrevPage} className="btn btn-primary col-2">Prev</button>
//             <button type="button" onClick={NextPage} className="btn btn-primary col-2">Next</button>
//         </>
//     )
// }

const Pagination =({pageNumber,setPageNumber,finalPg})=>{
    return <ReactPaginate 
    className="pagination justify-content-center gap-2" 
    nextLabel="Next"
    prevlabel="Prev"
    onPageChange={(data)=>{
        setPageNumber(data.selected+1);
    }
    }
    pageClassName="page-item"
    pageLinkClassName="page-link"
    nextLinkClassName="text-light"
    nextClassName="btn btn-primary "
    previousClassName="btn btn-primary text-light"
    activeClassName="active"
    previousLinkClassName="text-light"
    pageCount={finalPg} />
}

export default Pagination; 