const Book = require("./model");

const addBooks = async (req, res) => {
    try{
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        });
        
        res.status(200).json({ book: book, message: "book created" });
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message })
    }
};

const getAllBooks = async (req, res) => {
    try {
        const listAllBooks = await Book.findAll({});

        res.status(200).json({ books: listAllBooks, message: "found books" });
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message })
    }
};

const updateBook = async (req, res) => {
    try {
        const updateaBook = await Book.update(
            { author: req.body.newAuthor},
            { which: { title: req.body.title } }
        );

        res.status(200).json({ updated: updateaBook, message: "book updated" });
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const deleteaBook = await Book.destroy({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        });
    
        res.status(200).json({ deleted: deleteaBook, message: "book deleted"});
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message });
    }
};


module.exports = {
    addBooks: addBooks,
    getAllBooks: getAllBooks,
    updateBook: updateBook,
    deleteBook: deleteBook
};