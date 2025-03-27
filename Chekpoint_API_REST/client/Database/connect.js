let mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.M_URI)
    .then(() => console.log("connected to DB"))
    .catch((err) => console.error(err));
};

module.exports = { connect };
