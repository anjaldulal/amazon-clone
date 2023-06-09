import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { nanoid } from 'nanoid';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className='checkout-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Checkout Advertisement Banner" />
                <div>
                    <h3 className='checkout-username'>Hello, {user?.multiFactor.user.email}</h3>
                    <h2 className="checkout-title">Your Shopping Basket</h2>

                    {basket?.map((item) => {
                        return (
                            <CheckoutProduct
                                key={nanoid()}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        );
                    })}

                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;