const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HSu7vG9KoZAlXGSHh3jmRhUVStzvg6mrZ9AgU4d4Oom46Q7rlfyw1wnD2Fk45QIRtcnPUnYh1pzKNGfhxtxhlkY00zP1s1rcG');


// API

// App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request Recieved Boom!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // submits of the currency
        currency: 'usd',
    });

    // OK-Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/fir-73ad7/us-central1/api