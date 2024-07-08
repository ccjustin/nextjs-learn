// to turn this component into a client component, use
// 'use client';
// but to make it SEO friendly, render as much of the component on the server as possible

import React from 'react'
import AddToCart from '../AddToCart'
import styles from  './ProductCard.module.css';


const ProductCard = () => { 
  return (
    // styling method one : <div className={styles.card}>
    // styling method two, using Tailwind : 
    <div className='p-5 my-5 bg-sky-400 text-white text-xl'>

        {/* putting this button here is bad practice. shift the button to the client.
        <button onClick = {()=> {console.log("click")}}>Add to Cart</button> 
        */}
        <AddToCart></AddToCart>
    </div>
  )
}

export default ProductCard