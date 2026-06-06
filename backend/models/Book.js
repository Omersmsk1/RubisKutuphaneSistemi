const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,

  author: String,

  quantity: {
    type: Number,
    default: 1
  },

  status: {
    type: String,
    default: "Müsait"
  },

  borrowedBy: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Book", bookSchema);