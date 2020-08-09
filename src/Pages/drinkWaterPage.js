import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import water from './water.gif';

export default function drinkWaterPage(){
    return(
        <waterWrapper>
        <div className="col-10 mx-auto col-sm-8 col-md-6 col-lg-6 d-flex justify-content-center  ">
        <img src={`${water}`} alt="Paani" height="350px" className="img-cont" style={{margin:`2rem`}}/> </div>
        <div className="d-flex justify-content-center ">
        <h3 className="text-l">Lets drink water sip by sip by sip</h3>
        </div>
        <div className="col-10 mx-auto col-sm-8 col-md-6 col-lg-6 d-flex justify-content-center ">
        <Link to="/mindfulness" className="main-link"  style={{margin:`0.75rem`}}>
                 Lets move ahead!
        </Link></div>
        </waterWrapper>
    )
}

const waterWrapper = styled.div`

.img-cont{
    padding: 2rem;
    background:black;
    }
`;