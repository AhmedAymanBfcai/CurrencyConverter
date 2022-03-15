const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db.js');

const userRoutes = require('./routes/userRoutes.js');
const convertRoutes = require('./routes/convertRoutes.js');
const historyRoutes = require('./routes/historyRoutes.js');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(userRoutes);
app.use(convertRoutes);
app.use(historyRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
