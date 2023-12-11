import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters.js";
import Cards from "./components/Cards/cards.js";
import Pagination from "./components/Pagination/Pagination.js";
import SearchBar from "./components/Search/Search.js";

function App() {
    // let pageNumber = 5;
    const [pageNumber,setPageNumber]= useState(1);
    const [fetchData,setFetchData]=useState({results:[],info:{}});
    const [searchData,searchFetch]=useState();
    const [finalPg,setFinalPg]=useState();
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    // const {results,info}=fetchData;

    useEffect(()=>{
        if(searchData===undefined){
            (async function(){
                let data = await fetch(api).then(res=>res.json());
                setFetchData(data);  
                setFinalPg(data.info.pages);
            })()
        }else{
            (async function(){
                let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=`;
                
                async function searchQFetch(){
                    let data = await fetch(api+searchData).then(res=>res.json());
                    setFetchData(data);
                    setFinalPg(data.info.pages);
                    
                }
                searchQFetch();

                // let data = await fetch(api+searchData).then(res=>res.json());
                // setFetchData(data); 
                // console.log(data);
            })()
            // let api2=`https://rickandmortyapi.com/api/character/?page=2&name=`;
            // console.log(api2+searchData);
        }
    },[api,searchData]);
    // console.log(fetchData.results);

  return (
      <>
      <div className="App ubuntu my-4">
            <h1 className="text-center " >React <span className="text-primary">Project</span> </h1>
          </div>
          <div className="container">
            <div className="row">
                <SearchBar setPageNumber={setPageNumber} searchFetch={searchFetch} />
            </div>
              <div className="row">
                  <div className="col-3">
                        <Filters />
                  </div>
                  <div className="col-8">
                        <div className="row ">
                            {<Cards results1={fetchData}/>}
                            
                        </div>
                        <div className="row">
                            <Pagination finalPg={finalPg} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                        </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
