import React from 'react';
import {useState} from 'react';
import  "./Cardsm.css"

const Cards = ({results1})=>{
    const [temp_var,set_temp_var]=useState("Loading...");
    const {results}=results1;
    
    if(results===undefined){
        setTimeout(()=>{
            set_temp_var("Error Loading Data Please Reload");
        },4000)
        return(
            <h2>{temp_var}</h2>
        )
    }else{
        return(
            <div className="row img-fluid">
                {results.map((e)=>{ 
                    const{id, name,status,location,image}=e;

                    return <div key={id} className={`col-4 position-relative`}>
                    <div className={`cardWrapper`}>
                        <img src={image} alt="" className={`img-fluid ch_image`}></img>
                        <h5 className=".ch_name">Name: {name}</h5>
                        <h6>Location: {location.name}</h6>
                    </div>
                    <div className={`position-absolute badge ${status === 'Alive' ? 'bg-success':status==='Dead'?'bg-danger':'bg-secondary'}  `}>
                        {status}
                    </div>
                </div>
                })}
            </div>
        )
    }
}
export default Cards;