const express = require("express");

const router = express.Router();

const {
  getBooks,
  addBook,
  deleteBook,
  borrowBook,
  returnBook
} = require("../controllers/bookController");

const verifyToken = require(
  "../middleware/authMiddleware"
);

router.get("/", getBooks);

router.post(
  "/",
  verifyToken,
  addBook
);

router.delete(
  "/:id",
  verifyToken,
  deleteBook
);

router.put(
  "/borrow/:id",
  verifyToken,
  borrowBook
);

router.put(
  "/return/:id",
  verifyToken,
  returnBook
);

module.exports = router;