const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  emailId: {
    type: String,
  },
  password: String,
  age: Number,
  gender: String,
});

module.exports = mongoose.model("User", userSchema);
