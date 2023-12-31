const Book = require("./model");
const Genre = require("../genres/model");
const Author = require("../authors/model");

const addBooks = async (req, res) => {
    try{
        const genre = await Genre.findOne({ where: { genre: req.body.genre }});
        const author = await Author.findOne({ where: {author: req.body.author }});
        const book = await Book.create({
            title: req.body.title,
            GenreId: genre.id,
            AuthorId: author.id
        });
        
        res.status(201).json({ book: book, message: "book created" });
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message })
    }
};

const getAllBooks = async (req, res) => {
    try {
        const listAllBooks = await Book.findAll({});

        res.status(201).json({ books: listAllBooks, message: "found books" });
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

        res.status(201).json({ updated: updateaBook, message: "book updated" });
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
    
        res.status(201).json({ deleted: deleteaBook, message: "book deleted"});
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