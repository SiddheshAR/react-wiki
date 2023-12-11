import './Searchmod.css';


const SearchBar = ({setPageNumber,searchFetch})=>{
    // setPageNumber(1);

    return(
          <form className="d-flex justify-content-center gap-4 mb-5">
                <input className="form-control sr_input" onChange={(e)=>{searchFetch(e.target.value);setPageNumber(1)}}></input>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            <button onClick={(e)=>{e.preventDefault();}} className="btn btn-primary fs-5">Search</button>
          </form>  
    )
}
export default SearchBar