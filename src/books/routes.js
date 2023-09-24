const { Router }= require("express");
const bookRouter = Router();

const { getAllBooks, addBooks, updateBook, deleteBook } = require("./controllers")

bookRouter.post("/addbook", addBooks);
bookRouter.get("/listallbooks", getAllBooks);
bookRouter.put("/updateabook", updateBook);
bookRouter.delete("/deleteabook", deleteBook);


module.exports = bookRouter;