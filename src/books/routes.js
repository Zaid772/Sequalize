const { Router }= require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks } = require("./controllers")

bookRouter.post("/addbook", async (req, res) => {
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    });
    const successResponse = {
        book: book,
        message: "book created"
    };

    res.status(201).json(successResponse);
});

bookRouter.get("/getallbooks", getAllBooks)

bookRouter.delete("/deleteabook", async (req, res) => {
    const deleteaBook = await Book.destroy({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    })
    const successResponse = {
        deleted: deleteaBook,
        message: "book deleted"
    };

    res.status(201).json(successResponse);
});

bookRouter.put("/updateabook", async (req, res) => {
    const updateaBook = await Book.update(
        { author: req.body.newAuthor},
        { which: { title: req.body.title } }
    );
    const successResponse = {
        updated: updateaBook,
        message: "book updated"
    };

    res.status(201).json(successResponse);
});


module.exports = bookRouter;