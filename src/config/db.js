const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionURL = await mongoose.connect(process.env.MONGO_URL, {});

    console.log(
      `MongooDB connected: ${connectionURL.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
