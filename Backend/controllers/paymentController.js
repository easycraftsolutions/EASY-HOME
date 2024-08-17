const Paystack = require('paystack-api');
const paystack = require('../config/paystack');
const Artisan = require('../models/Artisan');
const Business = require('../models/Business');

// Payment Section
exports.initiatePayment = async (req, res) => {
    try {
        const { amount, email } = req.body;
        const reference = `easyhome_${Date.now()}`;
        const response = await paystack.transaction.initialize({ amount, email, reference });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { reference } = req.params;
        const response = await paystack.transaction.verify(reference);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Wallet Payment
exports.processPayment = async (req, res) => {
    try {
        const { userId, amount } = req.body;
        const user = await User.findById(userId);
        user.walletBalance -= amount;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
