const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const withdrawalController = require('../controllers/withdrawalController');

router.post('/request', authMiddleware, withdrawalController.requestWithdrawal);
router.get('/history', authMiddleware, withdrawalController.viewWithdrawalHistory);

module.exports = router;
