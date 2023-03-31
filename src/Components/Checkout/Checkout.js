import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className='checkout-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Checkout Advertisement Banner" />
                <div>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                    {/* BasketItem */}
                    {/* BaskeItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    );
}

export default Checkout;