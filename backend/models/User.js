const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,

  studentNo: {
    type: String,
    unique: true
  },

  username: {
    type: String,
    unique: true
  },

  email: {
    type: String,
    unique: true
  },

  password: String,

  role: {
    type: String,
    default: "student"
  }
});

module.exports = mongoose.model("User", userSchema);