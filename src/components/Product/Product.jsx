import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, seller, price, img, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h4 className='product-name'> {name}</h4>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturing: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;