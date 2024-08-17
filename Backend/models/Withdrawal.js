const mongoose = require('mongoose');

const WithdrawalSchema = new mongoose.Schema({
    amount: Number,
    accountNumber: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Withdrawal', WithdrawalSchema);
