import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';




function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    // console.log(user)

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
        // console.log("this runs on the when this component mounts for the first time");
        const getClientSecret = async () => {

            // sending payment request to the backend
            const response = await axios({
                method: 'post',
                // stripe expects the total in currency subunits
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();

    }, [basket]);

    // console.log('The client secret is >>>', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment Confirmation

            // console.log("this is payment intent", paymentIntent);

            // pushing the order data into the database after payment success
            db.collection('users')
                .doc(user?.multiFactor.user.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            // emptying the basket after success payment
            dispatch({
                type: 'EMPTY_BASKET'
            });

            // redirecting to orders page
            history('/orders', { replace: true });
        })

    }

    const handleStripeChange = (e) => {
        // listen for the changes in the card element as the customer starts typing card details
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
                            <CardElement onChange={handleStripeChange} className='card-container' />
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