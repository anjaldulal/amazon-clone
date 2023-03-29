import React from 'react';
import './Product.css';

function Product({ id, title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product-info">
                <p className="product-title">{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((i, index) => {
                        return <p key={index}>⭐</p>;
                    }
                    )}
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    );
}

export default Product;