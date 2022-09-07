import React from "react";
import {Button,Container,Row,Table} from 'react-bootstrap';
import {useCart} from "react-use-cart";

const Usercart=()=>{
    const {isEmpty,items,cartTotal,updateItemQuantity,removeItem}=useCart();
    return(
    <Container className="py-4 mt-5">
        <h1>
            {
                isEmpty? 'Your cart is empty':'The cart'
            }
        </h1>
        <Row className="justify-content-center">
        <Table striped bordered hover variant="dark">
      <tbody>
        {items.map((item,index)=>{
            return(
              <>
            <tr>
             <img src={item.imageURL} class="card-img-top img-fluid" alt="img" style={{width:"60px"},{height:"60px"}}/>   
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>{item.quantity}</td>
          <td><Button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</Button></td>
          <td><Button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</Button></td>
          <td><Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
          </td>
        </tr>
        </>
            )
        })}
      </tbody>
    </Table>
        </Row>
        <div>
        <h1>Total : ${cartTotal}</h1>

        </div>

    </Container>
    )
}
export default Usercart