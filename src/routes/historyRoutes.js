const express = require('express');
const router = express.Router();
const history = require('../controllers/historyController.js');
const protect = require('../middleware/authMiddleware.js');

router.route('/history').post(protect, history);

module.exports = router;
