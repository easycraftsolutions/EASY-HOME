const mongoose = require('mongoose');

const HomeOwnerSchema = new mongoose.Schema({
    name: String,
    contactDetails: String,
    preferredTimeFrame: String,
    paymentHistory: [Object],
    bookings: [Object]
});

module.exports = mongoose.model('HomeOwner', HomeOwnerSchema);
