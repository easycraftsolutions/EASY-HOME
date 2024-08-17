const mongoose = require('mongoose');

const ArtisanSchema = new mongoose.Schema({
    name: String,
    contactDetails: String,
    serviceCategories: [String],
    description: String,
    bio: String,
    profilePicture: String,
    portfolio: [String],
    availability: String,
    walletBalance: { type: Number, default: 0 },
    paymentHistory: [Object],
    reviews: [Object],
    rating: Number,
    bookings: [Object]
});

module.exports = mongoose.model('Artisan', ArtisanSchema);
