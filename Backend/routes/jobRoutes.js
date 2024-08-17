const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const jobController = require('../controllers/jobController');

router.post('/job', authMiddleware, jobController.createJob);
router.get('/job/:id', authMiddleware, jobController.viewJob);
router.put('/job/:id', authMiddleware, jobController.updateJob);
router.delete('/job/:id', authMiddleware, jobController.deleteJob);
router.get('/jobs', authMiddleware, jobController.viewAllJobs);
router.post('/assign/:id', authMiddleware, jobController.assignJobToArtisan);

module.exports = router;
