import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const history = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in currency subunits
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret);

            getClientSecret();
        }

    }, [basket]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment Confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        })
    }

    const handleStripeChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleStripeChange} />
                            <div className="payment-price-container">
                                <CurrencyFormat renderText={(value) => {
                                    return (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    );
                                }}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;