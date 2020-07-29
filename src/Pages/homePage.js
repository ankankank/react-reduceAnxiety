import React from 'react'
import {ProductConsumer} from '../context';

export default function homePage(){
    return(
        <>
        <ProductConsumer>
        {value => {
            console.log(value)
            return <h1>Hi from home page</h1>;

        }}
        </ProductConsumer>
        </>
    )
}