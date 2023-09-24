const Book = require("./model");

const getAllBooks = async (req, res) => {
    try {
        const listAllBooks = await Book.findAll({});

        res.status(200).json({ books: listAllBooks, message: "found books" });
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message })
    }
};

module.exports = {
    getAllBooks: getAllBooks,
}