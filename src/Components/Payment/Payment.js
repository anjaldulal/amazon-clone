import React from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.multiFactor.user.email}</p>
                        <p>123 Kharibot Marga</p>
                        <p>New Baneshwor, Kathmandu</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map(item => {
                            return (<CheckoutProduct
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
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        {/* stripe magic will go here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;