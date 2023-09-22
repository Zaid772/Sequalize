const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
// const Genre = require("../genres/model");

// const { getAllBooks } = require("./controllers");

bookRouter.post("/addbook", async (req, res) => {
    const genre = await Genre.findOne({where: { genre: req.body.genre}});
    console.log("genre: ", genre);
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        GenreID: genre.id,
    });

const successResponse = {
    book: book,
    message: "book created"
};

res.status(201).json(successResponse);
});

// bookRouter.get("getAllBooks",getAllBooks);

// bookRouter.put("/updatebookauthor", async (req, res) => {
//     const updatedBook = await Book.update(
//         { author: req.body.newAuthor },
//     )
// })