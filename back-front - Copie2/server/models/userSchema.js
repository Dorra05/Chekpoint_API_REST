const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 20 },
  email: { type: String, required: true },
  profession: { type: String },
});

const User = mongoose.model("user",userSchema);
module.exports = { User };
