import React from 'react';
import Hero from '../components/hero';
import defaultbcg from '../images/defaultbcg.jpg';
import {Link} from 'react-router-dom';

export default function defaultPage(){
    return(
        <>
        <Hero img={defaultbcg} title="ERROR :(" max="true" >
        <h2 className="text-uppercase">page not found </h2>

        <Link to="/" className="main-link" style={{marginTop:"2rem"}}>
        return home
        </Link>
        </Hero>
        </>
    )
}