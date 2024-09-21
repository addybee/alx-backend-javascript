const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  let id = req.params.id;
  res.send(`Payment methods for cart :${id}`);
});

app.get('/available_payments', (req, resp) => {
  resp.setHeader('content_type', 'application/json');
  resp.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(7865, () => {
  console.log(`API available on localhost port 7865`);
});
