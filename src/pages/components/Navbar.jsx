import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Navbar = () => {

  const items=useSelector((state)=>state.cart);
  return (
    <div className='wrapper3'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/cart" className='link'> Cart</Link>
        <div className='link'>     cartItems: {items.length}</div>
    </div>
  )
}
