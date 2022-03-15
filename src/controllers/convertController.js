const { default: axios } = require('axios');
const asyncHandler = require('express-async-handler');
// const fetch = require('node-fetch');
const History = require('../models/ConversionOperationModel.js');

const convert = asyncHandler(async (req, res) => {
  const { from, to, amount } = req.body;
  const apiUrl = `https://api.fastforex.io/convert?api_key=7cf46951ae-6202c47be0-r8m9lv&from=${from}&to=${to}&amount=${amount}`;

  axios
    .get(apiUrl)
    .then(async (response) => {
      console.log(response.data);
      const insertedRecord = await History.create({
        user: req.user._id,
        currencyFrom: from,
        currencyTo: to,
        amountInitial: amount,
        amountResult: Math.round(response.data.result.rate * amount, 2),
      });

      res.send({ code: 200, msg: 'success', data: insertedRecord });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = convert;
