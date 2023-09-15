import React from 'react';
import './Cart.css';
import { Navbar } from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { remove } from '../store/cartSlice';
 const Cart = () => {
  const dispatch=useDispatch();

  const items=useSelector((state)=>state.cart);
const handleRemove=(itemId)=>{
dispatch(remove(itemId));
}
  return (

    <div>
        <Navbar/>
        <h1>Cart Items</h1>
        <div className="cart_wrapper">
          {
            items.map((item)=>(
              <div className="cart_item" key={item.id}>
              <div className="image"><img src={item.image} alt="" /></div>
              <div className="title"><h5>{item.title}</h5></div>
              <div className="price">price:{item.price}</div>
              <div className="btn"><button onClick={()=>handleRemove(item.id)}>Remove</button></div>
              </div>
             
            ))
          }
          </div>
          </div>
  )
}

export default Cart;