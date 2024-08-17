const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const businessController = require('../controllers/businessController');

router.post('/project', authMiddleware, businessController.postNewProject);
router.get('/projects', authMiddleware, businessController.viewPostedProjects);
router.put('/project/:id', authMiddleware, businessController.editProjectDetails);
router.get('/artisans/:id', authMiddleware, businessController.viewMatchedArtisans);
router.post('/compare-artisans', authMiddleware, businessController.compareArtisanProfiles);
router.post('/select-artisan/:id', authMiddleware, businessController.selectArtisanForProject);
router.get('/bookings', authMiddleware, businessController.viewUpcomingBookings);
router.put('/preferred-timeframe', authMiddleware, businessController.setPreferredTimeFrame);
router.get('/payment-history', authMiddleware, businessController.viewPaymentHistory);
router.post('/make-payments', authMiddleware, businessController.makePayments);
router.post('/rate-artisans', authMiddleware, businessController.rateArtisans);
router.post('/leave-reviews', authMiddleware, businessController.leaveReviews);
router.post('/contact-customer-support', businessController.contactCustomerSupport);
router.get('/faq', businessController.viewFAQ);

module.exports = router;
