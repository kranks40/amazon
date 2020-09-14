import { Button } from '@material-ui/core';
import React from 'react';
import './Product.css'

function Product({title, price, rating, image, id}) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                <strong> <small>$</small></strong>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill().map((_, i) => (
                        <span>⭐</span>
                    ))}
                
                </div>
            </div>

            <img
            src={image} alt=''/>
                <Button>Add to Basket</Button>
        </div>
    );
}

export default Product;
