import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='products-container'> 
            <div className='product'>
            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
            </div>
            <div>
                <h2>Order Summary</h2>
                <p>Selected Item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Products;