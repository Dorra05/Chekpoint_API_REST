const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(`database connected`))
    .catch((err) => console.error(err));
};

module.exports = {connectDB}