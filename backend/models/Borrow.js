const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
    studentNo: {
        type: String,
        required: true
    },

    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },

    borrowDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date
    },

    returned: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Borrow", borrowSchema);