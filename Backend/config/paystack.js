const Paystack = require('paystack-api');

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);

module.exports = paystack;
