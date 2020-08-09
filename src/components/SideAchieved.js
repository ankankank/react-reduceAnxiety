import React from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function SideAchieved(){
    return(
        <ProductConsumer> 
            {value => {
                const {achievebarOpen,closeAchievebar,achieved,achieveITEMS} = value;
                return (
                    <CartWrapper show={achievebarOpen} onClick={closeAchievebar}>
                    <ul>
                    {achieved.map(item =>{
                        return (<li key={item.id} className="achieved-item mb-4">
                        <img width="35" src={`../${item.image}`} alt="todo" />
                        <div className="mt=3">
                        <h6 className="text-uppercase"> {item.title} </h6>
                        </div>
                         </li>
                        );
                    } )}

                    </ul>  
                    <h4 className="text-main text-capitalize">
                    Youve done {achieveITEMS} things!Woohoo!
                    </h4>
                    <div className="text-center my-5">
                    <Link to="/achieved" className="main-link">
                    Achievements page
                    </Link>
                    </div>
                    </CartWrapper>
                );
            }}
        </ProductConsumer>
    );
}

const CartWrapper=styled.div`
position: fixed;
top: 75px;
right:0;
width:100%;
height: 100%;
background:var(--mainWhite);
z-index: 1;
transform:${props => (props.show? "translateX(0)":"translateX(100%)")};
border-left: 4px solid var(--primaryColor);
transition: var(--mainTransition);
@media (min-width:576px){
    width:20rem;
}

overflow:scroll;
padding:2rem;
ul{
    padding: 0 !important;
}
.achieved-item{
    list-style-type: none;
}


`;