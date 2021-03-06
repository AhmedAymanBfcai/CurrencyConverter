const express = require('express');
const router = express.Router();
const convert = require('../controllers/convertController.js');
const protect = require('../middleware/authMiddleware.js');

router.route('/convert').post(protect, convert);

module.exports = router;
