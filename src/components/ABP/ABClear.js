import React from 'react'
import {ProductConsumer} from "../../context";

export default function ABCol(){
    return(
        <div className="container-fluid text-center d-none d-lg-block my-5">
        <div className="row">
        <ProductConsumer>
        {value =>{
            const{clearAB,achieveITEMS} = value;
            return(
                <div className="col text-title text-center my-4">
                <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearAB}>
                Clear this section </button>
                <h3> Total things you did: {achieveITEMS} </h3>
                </div>
            )
        }}
        </ProductConsumer>
        </div>
        </div>
    )
}