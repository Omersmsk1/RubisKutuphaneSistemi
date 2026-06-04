const express = require("express");

const router = express.Router();

const {
    getBooks,
    addBook,
    deleteBook,
    borrowBook,
    returnBook
} = require("../controllers/bookController");

router.get("/", getBooks);

router.post("/", addBook);

router.delete("/:id", deleteBook);

router.put("/borrow/:id", borrowBook);

router.put("/return/:id", returnBook);

module.exports = router;