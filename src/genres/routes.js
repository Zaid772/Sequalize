const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getGenres } = require("./controllers");

genreRouter.post("/addgenre", addGenre);
genreRouter.get("/getgenres", getGenres);

module.exports = genreRouter;