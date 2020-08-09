import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function drinkWaterPage(){
    return(
        <>
        <h1>Hello from DW page</h1>
        <Link to="/mindfulness" className="main-link"  style={{margin:`0.75rem`}}>
                 Lets move ahead!
        </Link>
        </>
    )
}