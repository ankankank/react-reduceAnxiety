import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
export default function singleTODOPage(){
    return(
        <>
        <ProductConsumer>{
            value =>{
                const {singleTODO,addToAchieved,loading} = value; 

                if(loading){
                    return <h1> LOADING... </h1>;
                }

                const {description,intensity,id,title,image} = singleTODO;
                return (
                    <section className ="py-5">
                    <div className="container">
                    <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img src={`../${image}`} alt="single todo" className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4"> Activity:{title} </h5>
                    <h5 className="text-capitalize text-muted"> Intensity:{intensity} </h5>
                    <p className="text-capitalize text-title mt-3"> How does this help? </p>
                    <p>{description} </p>
                    <button type="button" className="main-link" style={{margin:`0.75rem`}} onClick ={() => addToAchieved(id)} >

                    Add to achievements!

                    </button>
                    <Link to="/todo" className="main-link"  style={{margin:`0.75rem`}}>
                      Back to main to-do page
                    </Link>
                    </div>
                    </div>
                    </div>
                    </section>
                );

            }}
                </ProductConsumer>
        </>
    )
}