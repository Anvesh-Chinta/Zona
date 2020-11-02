const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HWaKcGr8TkfccavBGnYYNe280Rmx857jrhjHP36Kspq08NZqL4xd5yiR2FcCMfXjSa0oBL4ZleWGR1FPymzDAqf00tob0XrXE')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -  API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.get('/yo', (request, response) => response.status(200).send("What's up dude?"))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/zona-87983/us-central1/api
