import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaSearch,FaPlusSquare} from 'react-icons/fa';
import {ProductConsumer} from '../context';


export default function Todo({pro}) {
    return(
        <ProductConsumer>
        {value => {
            const {addToAchieved,setSingleTodo} = value;
            return (
                <ItemWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
                <div className="card">
                  <div className="img-container">
                  <img src={pro.image} className="card-img-top p-5" alt="todo"
                  style={{height:"300px" }} />
                  <div className="product-icon">
                  <Link to={`/todo/${pro.id}`} onClick={()=>setSingleTodo(pro.id)}>
                  <FaSearch className="icon" />
                  </Link>                  
                  <FaPlusSquare className="icon" onClick={() => addToAchieved(pro.id)} />
                  </div>
                  </div>
                  <div className="card-body d-flex justify-content-between">
                  <p className="mb-0">{pro.title}</p>
                  <p className="mb-0 text-main">{pro.intensity}</p>

                  </div>
                </div>
                </ItemWrapper>
            );
        }}

        </ProductConsumer>

    );

}

const ItemWrapper = styled.div `
.card{
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
    transition: var(--mainTransition);
    height:100%;
}

.card:hover{
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
    cursor:pointer;
}
.card-img-top{
    transition: var(--mainTransition);
}
.card:hover .card-img-top{
    transform: scale(1.15);
    opacity:0.2;
}

.img-container{
    position:relative;
}

.product-icon{
    transition:var(--mainTransition);
    position:asolute;
    top:50%;
    left:50%;
    opacity:0;
}

.icon{
    font-size:2rem;
    margin:0.5rem;
    padding:0.5rem;
    color: var(--primaryColor);
    background:var(--mainBlack);
    border-radius:0.5rem;
}

.card:hover .product-icon{
    opacity:1;
}

.card-body{
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
}
`;