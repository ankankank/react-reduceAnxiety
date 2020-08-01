import React from 'react'

import{FaBars,FaClipboardCheck} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import logo from '../images/logo.png'

export default function Navbar(){
    return(
        <ProductConsumer>
        {
            value =>{
                const{achieveITEMS,handleSidebar,handleAchievebar}=value
                return(
                <NavWrapper>
                <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar}/>
                <img src={logo} alt="reduce anxiety"/>
                <div className="nav-achieved">
                <FaClipboardCheck className="nav-icon" onClick={handleAchievebar}>
                </FaClipboardCheck>
                <div className="achieved-items">{achieveITEMS}</div>

                </div>

                </div>
            </NavWrapper>
                );
        }}
        
        </ProductConsumer>
    );
}

const NavWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
top: 0;
width: 100%;
padding: 1rem 1.5rem;
background: var(--mainGrey);
border-bottom:3px solid var(--primaryColor);
.nav-center{
    display: flex;
    align-items:center;
    justify-content: space-between;
    max-width:1170px;
    margin: 0 auto;
}

.nav-icon{
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-achieved{
    position: relative;
}

.achieved-items{
    background:var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position:absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
}
`;