import React, { useEffect, useState } from 'react';
import './Products.css';
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchData } from '../../store/productSlice';
import { STATUSES } from '../../store/productSlice';
const Products = () => {
const dispatch=useDispatch();

const {data : products,status}=useSelector((state)=>state.product); 
useEffect(() => {
   dispatch(fetchData());
    // const fetchData=async()=>{
    //     const res=await fetch("https://fakestoreapi.com/products");
    //     const data= await res.json();
    //     // console.log(data);
    // setProducts(data);   
      
    // }

    // fetchData();
}, []);


const handleAdd=(product)=>{
    dispatch(add(product) );
}
if(status===STATUSES.LOADING){
    return <h2>loading....</h2>
}
  return (
  <>{
        products.map((product)=>(
<div className="card" key={product.id}>
    <div className="image"><img src={product.image} alt="" /></div>
    <div className="title"><h6>{product.title}</h6></div>
    {/* <div className="desc">{product.description}</div> */}
    <div className="price">{product.price}</div>
    <div className="cate">{product.category}</div>
    <div className="btn"><button  onClick={()=>handleAdd(product)}>Add to cart</button></div>
</div>
            
        ))
    }</>
  )
}

export default Products