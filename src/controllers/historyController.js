const asyncHandler = require('express-async-handler');
const History = require('../models/ConversionOperationModel.js');

// @desc    Auth user & get token
// @route   POST /history
// @access  Public
const history = asyncHandler(async (req, res) => {
  const { from, to } = req.body;

  const filter = { user: req.user._id };
  if (from && from.length > 0) {
    filter.currencyFrom = from;
  }
  if (to && to.length > 0) {
    filter.currencyTo = to;
  }

  const history = await History.find(filter);
  res.send(history);
});

module.exports = history;
