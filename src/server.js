require("dotenv").config();
const express = require("express");

const port = process.env. PORT || 5001;

const app = express();

app.use(express.json());

const {DataTypes} = require("sequelize")
const connection = requuire("./db/connection");

const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    GENRE: {
        type: DataTypes.STRING,
    }
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
});

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"});
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});