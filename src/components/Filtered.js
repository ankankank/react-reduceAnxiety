import React from 'react'
import styled from "styled-components";
import {ProductConsumer} from "../context";

export default function Filtered(){
    return(
        <ProductConsumer>{
            value =>{
                const {intensity,handleChange,search,generalTODO} = value;
                
                let x=new Set()
                    x.add("all");
                    for(let todo in generalTODO){
                        x.add(generalTODO[todo]["intensity"]);
                    }
                x = [...x];

                return (
                    <div className="row my-5">
                    <div className="col-10 mx-auto">
                    <FilterWrapper>
                    <label htmlFor="search"> Search Product </label>
                    <input type="text" name="search" id="search" onChange={handleChange} value={search} className="filter-item"/>
                    <label htmlFor="intensity"> Intensity </label>
                    <select name="intensity" id="intensity" className="filter-item" onChange={handleChange} value={intensity}>
                    {
                        x.map((intensity,index) =>{
                            return (<option key={index} value={intensity}> {intensity}</option>)
                        })
                    }
                    </select>
                    </FilterWrapper>
                    </div>
                    </div>

                )
            }
        }
        </ProductConsumer>
    )
}


const FilterWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
 grid column-gap: 2rem;
 grid-row-gap: 1rem;
 .label{
     font-weight: bold;
     text-transform: capitalize;
 }
 .filter-item{
     display: block;
     width: 100%;
     background: transparent;
     border-radius: 0.5rem;
     border: 2px solid var(--darkGrey);
 }
`;