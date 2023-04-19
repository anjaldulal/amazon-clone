import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    // remove the item from the basket
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }

    return (
        <div className="checkout-product">
            <img className='checkout-product-image' src={image} alt="product" />
            <div className='checkout-product-description'>
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, index) => {
                        return <p key={index}>⭐</p>;
                    }
                    )}
                </div>
                <button className="remove-product" onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;