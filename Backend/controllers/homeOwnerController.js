const HomeOwner = require('../models/HomeOwner');
const Job = require('../models/Job');
const Artisan = require('../models/Artisan');

// Project Posting Section
exports.postNewProject = async (req, res) => {
    try {
        const newProject = new Job(req.body);
        newProject.postedBy = req.user.id;
        await newProject.save();
        res.json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewPostedProjects = async (req, res) => {
    try {
        const projects = await Job.find({ postedBy: req.user.id });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editProjectDetails = async (req, res) => {
    try {
        const project = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Artisan Matching Section
exports.viewMatchedArtisans = async (req, res) => {
    try {
        const project = await Job.findById(req.params.id);
        const artisans = await Artisan.find({ serviceCategories: { $in: project.serviceCategory } });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.compareArtisanProfiles = async (req, res) => {
    // Implementation for comparing artisan profiles
};

exports.selectArtisanForProject = async (req, res) => {
    try {
        const project = await Job.findById(req.params.id);
        project.selectedArtisan = req.body.artisanId;
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Booking and Scheduling Section
exports.viewUpcomingBookings = async (req, res) => {
    try {
        const homeOwner = await HomeOwner.findById(req.user.id);
        res.json(homeOwner.bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.setPreferredTimeFrame = async (req, res) => {
    try {
        const homeOwner = await HomeOwner.findByIdAndUpdate(req.user.id, {
            preferredTimeFrame: req.body.preferredTimeFrame
        }, { new: true });
        res.json(homeOwner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Payment Section
exports.viewPaymentHistory = async (req, res) => {
    try {
        const homeOwner = await HomeOwner.findById(req.user.id);
        res.json(homeOwner.paymentHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.makePayments = async (req, res) => {
    try {
        // Payment logic
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Rating and Review Section
exports.rateArtisans = async (req, res) => {
    // Implementation for rating artisans
};

exports.leaveReviews = async (req, res) => {
    // Implementation for leaving reviews
};

// Support Section
exports.contactCustomerSupport = (req, res) => {
    // Support contact logic
};

exports.viewFAQ = (req, res) => {
    res.sendFile('path/to/faq.pdf');
};
