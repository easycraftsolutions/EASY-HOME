const Job = require('../models/Job');
const Artisan = require('../models/Artisan');

// Job Section
exports.createJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.json(newJob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: 'Job deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Job Assignment Section
exports.assignJobToArtisan = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        job.artisan = req.body.artisanId;
        await job.save();
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
