import React from 'react';
import {ProductConsumer} from '../context';
import Title from '../components/title';
import Todo from '../components/todo';

export default function todoPage(){
    return(
        <ProductConsumer>
        {value =>{
            const {filteredProducts} = value;
            return(
                <section className="py-5">
                <div className="container">
                <Title center title="To-do List" />
                <div className="row py-5">
                {filteredProducts.map(pro => {
                return <Todo key={pro.id} pro={pro} />;
                })}

                </div>
                </div>
                </section>

            );
        }}
        </ProductConsumer>
    );
}