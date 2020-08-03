import React from 'react';
import Hero from '../components/hero';
import {Link} from 'react-router-dom';


export default function homePage(){
    return(
        <>
        <Hero title="Your home for relaxation" max="true">
        <Link to="/drinkWater" className="main-link" style={{margin:"2rem"}} > Lets get started!  </Link>
        </Hero>


        </>
    );
}