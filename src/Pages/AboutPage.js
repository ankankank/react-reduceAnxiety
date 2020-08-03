import React from 'react';
import Info from '../components/AboutPage/info';
import Hero from '../components/hero'
import aboutbcg from '../images/aboutbcg.jpg';
export default function AboutPage(){
    return(
        <>
        <Hero img={aboutbcg}>
        <Info />
        </Hero>
        </>
    )
}
