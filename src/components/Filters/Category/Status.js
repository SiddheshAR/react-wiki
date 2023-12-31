import React from 'react'
import FilterBtn from "../FilterBtn.js"
const Status = ({setStatus,setPageNumber})=>{
    let status=["alive","dead","unknown"]
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Status
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap">
        {status.map((items,index)=><FilterBtn tasks={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items}/>)}
        </div>
        </div>
    </div>
    )
}

export default Status;