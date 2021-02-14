const mongoose = require("mongoose");
require('dotenv').config()

const uri =process.env.DATABASE_URL;
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectDB = async () => {
  await mongoose.connect(uri, options);
  console.log("db connected");
};

module.exports = connectDB;
