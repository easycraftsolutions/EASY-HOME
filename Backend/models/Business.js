const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    name: String,
    contactDetails: String,
    serviceCategories: [String],
    description: String,
    preferredTimeFrame: String,
    walletBalance: { type: Number, default: 0 },
    paymentHistory: [Object],
    bookings: [Object]
});

module.exports = mongoose.model('Business', BusinessSchema);
