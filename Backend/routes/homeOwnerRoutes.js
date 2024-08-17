const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const homeOwnerController = require('../controllers/homeOwnerController');

router.post('/project', authMiddleware, homeOwnerController.postNewProject);
router.get('/projects', authMiddleware, homeOwnerController.viewPostedProjects);
router.put('/project/:id', authMiddleware, homeOwnerController.editProjectDetails);
router.get('/artisans/:id', authMiddleware, homeOwnerController.viewMatchedArtisans);
router.post('/compare-artisans', authMiddleware, homeOwnerController.compareArtisanProfiles);
router.post('/select-artisan/:id', authMiddleware, homeOwnerController.selectArtisanForProject);
router.get('/bookings', authMiddleware, homeOwnerController.viewUpcomingBookings);
router.put('/preferred-timeframe', authMiddleware, homeOwnerController.setPreferredTimeFrame);
router.get('/payment-history', authMiddleware, homeOwnerController.viewPaymentHistory);
router.post('/make-payments', authMiddleware, homeOwnerController.makePayments);
router.post('/rate-artisans', authMiddleware, homeOwnerController.rateArtisans);
router.post('/leave-reviews', authMiddleware, homeOwnerController.leaveReviews);
router.post('/contact-customer-support', homeOwnerController.contactCustomerSupport);
router.get('/faq', homeOwnerController.viewFAQ);

module.exports = router;
