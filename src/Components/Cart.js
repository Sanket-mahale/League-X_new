import React from 'react';
import { useCart } from 'react-use-cart';

const  Cart=(props)=>{
  const {addItem}=useCart();
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow" key={props.id}>
             <img src={props.img} class="card-img-top img-fluid" alt="img"/>
                <div class="card-body">
                    <h5 class="card-title" >{props.name}</h5>
                    <p class="card-text">${props.price}</p>
                    <button  class="btn btn-primary" onClick={()=>addItem(props.userObj)}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
