import React, { useState, useEffect } from 'react';
import './Orders.css';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from './Order';

function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if (user) {

            db.collection('users')
                .doc(user?.multiFactor.user.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    // console.log(snapshot.docs.map(doc => ({
                    //     id: doc.id,
                    //     data: doc.data
                    // })))
                    // console.log(snapshot)
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ));

        } else {
            setOrders([]);
        }


    }, [user])


    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="order-container">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;