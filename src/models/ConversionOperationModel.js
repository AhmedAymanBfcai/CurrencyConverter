const mongoose = require('mongoose');

const historySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    currencyFrom: {
      type: String,
      required: true,
    },
    currencyTo: {
      type: String,
      required: true,
    },
    amountInitial: {
      type: Number,
      required: true,
    },
    amountResult: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model('History', historySchema);

module.exports = History;
