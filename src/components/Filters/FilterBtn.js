import React from 'react'

const FilterBtn = ({name,index,items,tasks,setPageNumber})=>{
    // console.log(items);
    return(
        <div>
        <style jsx>
    {`
    .x:checked+label{
        background-color:#0b5ed7;
        color:white;
    }

    input[type="radio"]{
        display:none;
    }
    `}
        </style>

            <div className="form-check">
            <input className="form-check-input x" 
             type="radio" 
             name={name}
             id={`${name}-${index}`}
             onClick={()=>{
                tasks(items);
                setPageNumber(1);
             }}
             />
            <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
            </div>
        </div>
    )
}

export default FilterBtn;