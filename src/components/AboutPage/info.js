import React from 'react'
import Title from '../title'


export default function Info(){
    return(
        <section className="y-5">
        <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
        <Title title="about me" />
        <p className="text-lead text-muted my-3" >
        I am a Computer Science student aiming to help people who suffer from anxiety,helping them with techniques and resources which worked for me
        </p>
        </div>

        </div>
        </div>

        </section>
    );
}
