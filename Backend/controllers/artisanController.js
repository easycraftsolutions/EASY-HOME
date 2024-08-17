const Artisan = require('../models/Artisan');
const Job = require('../models/Job');
const { sendNotification } = require('../utils/sendEmail');

// Profile Section
exports.getProfile = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        res.json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { name, contactDetails, serviceCategories, description, bio } = req.body;
        const artisan = await Artisan.findByIdAndUpdate(req.user.id, {
            name,
            contactDetails,
            serviceCategories,
            description,
            bio,
            profilePicture: req.file ? req.file.path : undefined
        }, { new: true });
        res.json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.uploadPortfolio = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        artisan.portfolio.push(req.file.path);
        await artisan.save();
        res.json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Job Matching Section
exports.viewAvailableJobs = async (req, res) => {
    try {
        const jobs = await Job.find({ serviceCategory: { $in: req.user.serviceCategories } });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.receiveJobAssignments = async (req, res) => {
    // Implementation for receiving job assignments
};

// Booking and Scheduling Section
exports.viewUpcomingBookings = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        res.json(artisan.bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.setAvailability = async (req, res) => {
    try {
        const artisan = await Artisan.findByIdAndUpdate(req.user.id, {
            availability: req.body.availability
        }, { new: true });
        res.json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Payment Section
exports.viewEarnings = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        res.json({ walletBalance: artisan.walletBalance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.withdrawPayments = async (req, res) => {
    try {
        // Withdraw logic
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewPaymentHistory = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        res.json(artisan.paymentHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Rating and Review Section
exports.viewRatings = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        res.json({ rating: artisan.rating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewReviews = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.user.id);
        res.json(artisan.reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Resources Section
exports.accessGuidelines = (req, res) => {
    res.sendFile('path/to/guidelines.pdf');
};

exports.viewEducationalMaterials = (req, res) => {
    res.redirect('https://blog.easyhome.com');
};

exports.contactSupport = (req, res) => {
    // Support contact logic
};
