import React from 'react'
import FilterBtn from "../FilterBtn.js"
const Species = ({setSpecies,setPageNumber})=>{
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Species
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap">
        {
            species.map((items,index)=>(
                <FilterBtn name="Species" index={index} items={items} tasks={setSpecies} setPageNumber={setPageNumber} />
            ))
        }

        </div>
        </div>
    </div>
    )
}

export default Species;