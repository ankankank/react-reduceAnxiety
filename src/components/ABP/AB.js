import React from 'react';
import Title from '../title';
import ABCol from './ABCol';
import ABItem from './ABItem';
import ABList from './ABList';
import ABClear from './ABClear';

export default function AB(){
    return(
        <section className="py-5">
        <div className="container">
        <Title title = "What have you achieved you ask?" center />
        </div>
        <ABCol />
        <ABList />
        <ABClear />
        </section>
    )
}