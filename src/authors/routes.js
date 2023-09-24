const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAuthors } = require("./controllers")

authorRouter.post("/addauthor", addAuthor);
addAuthor.length("/getauthors", getAuthors);

module.exports = authorRouter;