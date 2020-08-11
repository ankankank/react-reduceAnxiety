import React from 'react'
import ABItem from './ABItem';
import {ProductConsumer} from '../../context';

export default function ABList(){
    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col">
        <ProductConsumer>
        { value =>{
            const {achieved,removeItem} = value;
            if(achieved.length === 0){
                return(
                    <h1 className="text-title text-center my-4"> Currently empty, lets start! </h1>
                );
            }
            return(
                <>
                {achieved.map(item => (<ABItem key={item.id} aBItem={item} removeItem={removeItem}></ABItem>))}
                </>
            );
        }}
        </ProductConsumer>
        </div>
        </div>        
        </div>
    )
}