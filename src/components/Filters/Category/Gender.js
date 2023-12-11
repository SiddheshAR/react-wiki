import React from 'react'
import FilterBtn from "../FilterBtn.js"
const Gender = ({setGender,setPageNumber})=>{
    const genders = ["female","male","unknown","genderless"]
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Gender
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap">
        {
            genders.map((items,index)=>(
                <FilterBtn key={index} name="gender" index={index} items={items} tasks={setGender} setPageNumber={setPageNumber}/>
            ))
        }
        
        </div>
        </div>
    </div>
    )
}

export default Gender;