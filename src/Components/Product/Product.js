import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product-info">
                <p className="product-title">The lean Startup</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>123.00</strong>
                </p>
                <div className="product-rating">
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" />
            <button>Add to Basket</button>
        </div>
    );
}

export default Product;