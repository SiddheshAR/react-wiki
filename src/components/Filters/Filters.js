import React from "react";
import Gender from "./Category/Gender.js";
import Species from "./Category/Species.js";
import Status from "./Category/Status.js";

const Filters = ({setStatus,setSpecies,setGender,setPageNumber}) =>{
    return(
        <div className="col-12 ">
           <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div
            style={{cursor:"pointer"}}
            className="mb-4 text-center text-primary text-text-decoration-underline "
            onClick={()=>{
                setSpecies("");
                setGender("");
                setStatus("");
                setPageNumber(1);
                window.location.reload(false);
            }}
            >
                Clear Filter
            </div>

            <div className="accordion" id="accordionExample">
                <Gender setGender={setGender} setPageNumber={setPageNumber}/>
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
            </div>

        </div>
    )
    }

    export default Filters;