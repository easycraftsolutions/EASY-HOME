const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    serviceCategory: [String],
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
    selectedArtisan: { type: mongoose.Schema.Types.ObjectId, ref: 'Artisan' },
    status: { type: String, default: 'Open' }
});

module.exports = mongoose.model('Job', JobSchema);
