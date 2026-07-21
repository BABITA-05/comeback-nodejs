import { Router } from "express";
import { CreateBook, DeleteBook, GetAllBooks, GetBookById, UpdateBook } from "./book_handler.js";

let bookRouter = Router()
//rule define
bookRouter.get("/all", GetAllBooks)
bookRouter.get("/single/:id", GetBookById)
bookRouter.post("/create", CreateBook)
bookRouter.put("/update", UpdateBook)
bookRouter.delete("/delete/:id", DeleteBook)

export default bookRouter