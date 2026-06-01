const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("user-service connected to db...");
  } catch (error) {
    console.log("user service not connected to db...", error);
  }
};

module.exports = connectToDb;
