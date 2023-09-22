require("dotenv").config();
const express = require("express");

// const Book = require("./books/model");
// const Genre = require("./genres/model");

// const bookRouter = require("./books/routes")

const port = process.env. PORT || 5001;

const app = express();

app.use(express.json());

// app.use("/books", bookRouter);
// app.use("/genres", genreRouter)

const {DataTypes} = require("sequelize")
const connection = require("./db/connection");

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
    },
    author: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    }
});


const syncTables = () => {
    Book.sync();
    // Genre.sync();

    // Book.hasOne(Genre);
    // Genre.belongsTo(Book);
};

app.post("/addbook", async (req, res) => {
    const book = await Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    });
    const successResponse = {
        book: book,
        message: "book created"
    }

    res.status(201).json(successResponse);
});

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`App is listening on port ${port}`);
});

