import React from 'react'
import './Home.css';
import { Navbar } from './components/Navbar';
import Products from './components/Products';
 const Home = () => {
  return (
    <><Navbar></Navbar>
    <div className='wrapper'>
    <h1>React redux tool kit</h1>
   <div className="products_wrapper"> <Products/></div>
    </div>
    </>
  )
}
export default Home;