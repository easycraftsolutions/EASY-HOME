const Withdrawal = require('../models/Withdrawal');
const Artisan = require('../models/Artisan');
const Business = require('../models/Business');

// Request Withdrawal
exports.requestWithdrawal = async (req, res) => {
    try {
        const { amount, accountNumber } = req.body;
        const user = await Artisan.findById(req.user.id);
        if (user.walletBalance < amount) {
            return res.status(400).json({ error: 'Insufficient funds' });
        }
        user.walletBalance -= amount;
        await user.save();
        const withdrawal = new Withdrawal({ amount, accountNumber, userId: req.user.id });
        await withdrawal.save();
        res.json({ message: 'Withdrawal requested' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// View Withdrawal History
exports.viewWithdrawalHistory = async (req, res) => {
    try {
        const withdrawals = await Withdrawal.find({ userId: req.user.id });
        res.json(withdrawals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
