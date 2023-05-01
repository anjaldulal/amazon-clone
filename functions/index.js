const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

// const newKey = `sk_test_51N2VilJLa1Q9hurIsMcLiedc1B5X65Xj8qcXA3Ycp2PHeCp9rQ8aObm
// STrivJB6CAaQBrCv0BAxF46xgizsQoNiq00MOgjk1sY`;

const stripe = require("stripe")('sk_test_51N2VilJLa1Q9hurIsMcLiedc1B5X65Xj8qcXA3Ycp2PHeCp9rQ8aObmSTrivJB6CAaQBrCv0BAxF46xgizsQoNiq00MOgjk1sY');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

// --run this code if there is any post request
// .... from the below mentioned url by the frontend
app.post("/payment/create", async (request, response) => {
    // console.log("this is", request);
    // extracting the payment amount from the url received from the frontend
    const total = parseInt(request.query.total);

    // console.log("payment request received", total);

    // sending the payment request of the amount
    // .... received from the frontend to the stripe API
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - created -- sending the response from the strip api to the frontend
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen Commands
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/clone-8431b/us-central1/api

