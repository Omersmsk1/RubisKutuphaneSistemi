const Book = require("../models/Book");
const Borrow = require("../models/Borrow");

const getBooks = async (req, res) => {

    try {

        const books = await Book.find();

        res.json(books);

    } catch (err) {

        res.status(500).json({
            message: "Kitaplar getirilemedi"
        });

    }
};

const addBook = async (req, res) => {

    try {

        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            status: "Müsait",
            borrowedBy: ""
        });

        const savedBook = await newBook.save();

        res.status(201).json(savedBook);

    } catch (err) {

        res.status(500).json({
            message: "Kitap eklenemedi"
        });

    }
};

const deleteBook = async (req, res) => {

    try {

        await Book.findByIdAndDelete(req.params.id);

        res.json({
            message: "Kitap silindi"
        });

    } catch (err) {

        res.status(500).json({
            message: "Kitap silinemedi"
        });

    }
};

const borrowBook = async (req, res) => {

    try {

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                status: "Ödünçte",
                borrowedBy: req.body.studentNo
            },
            { new: true }
        );

        res.json(updatedBook);

    } catch (err) {

        res.status(500).json({
            message: "Kitap ödünç verilemedi"
        });

    }
};

const returnBook = async (req, res) => {

    try {

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                status: "Müsait",
                borrowedBy: ""
            },
            { new: true }
        );

        res.json(updatedBook);

    } catch (err) {

        res.status(500).json({
            message: "Kitap teslim alınamadı"
        });

    }
};

module.exports = {
    getBooks,
    addBook,
    deleteBook,
    borrowBook,
    returnBook
};