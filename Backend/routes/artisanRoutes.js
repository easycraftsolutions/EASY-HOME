const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const artisanController = require('../controllers/artisanController');

router.get('/profile', authMiddleware, artisanController.getProfile);
router.put('/profile', authMiddleware, upload.single('profilePicture'), artisanController.updateProfile);
router.post('/portfolio', authMiddleware, upload.single('portfolioImage'), artisanController.uploadPortfolio);
router.get('/jobs', authMiddleware, artisanController.viewAvailableJobs);
router.get('/bookings', authMiddleware, artisanController.viewUpcomingBookings);
router.put('/availability', authMiddleware, artisanController.setAvailability);
router.get('/earnings', authMiddleware, artisanController.viewEarnings);
router.post('/withdraw', authMiddleware, artisanController.withdrawPayments);
router.get('/payment-history', authMiddleware, artisanController.viewPaymentHistory);
router.get('/ratings', authMiddleware, artisanController.viewRatings);
router.get('/reviews', authMiddleware, artisanController.viewReviews);
router.get('/guidelines', artisanController.accessGuidelines);
router.get('/educational-materials', artisanController.viewEducationalMaterials);
router.post('/contact-support', artisanController.contactSupport);

module.exports = router;
