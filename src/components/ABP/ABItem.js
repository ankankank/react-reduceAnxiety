import React from 'react';
import {FaTrash} from 'react-icons/fa';

export default function ABItem({aBItem,removeItem}){
    const {id,title,intensity,image} = aBItem;
    return(
        <div className="row mt-5 mt-lg=0 text-capitalize text-center align-items-center">
        <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60px" className="img-fluid" alt="img" />
        </div>    
        <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none"> Activity: </span>
        {title}
        </div> 
        <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none"> Intensity: </span>
        {intensity}
        </div>    
        <div className="col-10 mx-auto col-lg-2 pb-2">
        <FaTrash className="text-danger" onClick={()=> removeItem(id)} />
        </div>         
        </div>
    )
}