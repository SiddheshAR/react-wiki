import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import Filters from "./components/Filters/Filters.js";
import Cards from "./components/Cards/cards.js";
import Pagination from "./components/Pagination/Pagination.js";
import SearchBar from "./components/Search/Search.js";
import Navbar from "./components/Navbar/Navbar.js";
import Episodes from "./Pages/Episodes.js";
import Location from "./Pages/Location.js";
import Dummy from "./Practice.js"
// import ReactPaginate from 'react-paginate';

function App(){
    return(
        <Router>
            <div className="App">
               
                <Navbar/>
               
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/episodes" element={<Episodes />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/dummy" element={<Dummy />} />
                </Routes>
            </div>
        </Router>
    )
}




const Home=()=> {
    // let pageNumber = 5;
    const [pageNumber,setPageNumber]= useState(1);
    const [fetchData,setFetchData]=useState({results:[],info:{}});
    const [searchData,searchFetch]=useState("");
    const [finalPg,setFinalPg]=useState(1);
    const [curStatus,setStatus]=useState("");
    const [Gender,setGender]=useState("");
    const [species,setSpecies]=useState("");

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchData}&status=${curStatus}&gender=${Gender}&species=${species}`;
    // let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    // const {results,info}=fetchData;

    useEffect(()=>{
       
            (async function(){
                let data = await fetch(api).then(res=>res.json());
                setFetchData(data);  
                setFinalPg(data?.info?.pages);
            })()
        
    },[api]);
    // console.log(fetchData.results);

  return (
      <>
      <div className="App ubuntu">

            
          </div>
          <div className="container">
            <div className="row">
                <SearchBar setPageNumber={setPageNumber} searchFetch={searchFetch} />
            </div>
              <div className="row">
                  <div className="col-3">
                        <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
                  </div>
                  <div className="col-8">
                        <div className="row ">
                            {<Cards results1={fetchData}/>}
                            
                        </div>
                        <div className="row">
                            <Pagination finalPg={finalPg} pageNumber={pageNumber} setPageNumber={setPageNumber} />
                        </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
