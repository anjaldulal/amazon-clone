import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider';

function Product({ id, title, price, rating, image }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        });

    }

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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;