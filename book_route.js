import { Router } from "express";
import { CreateBook, DeleteBook, GetAllBooks, GetBookById, UpdateBook } from "./book_handler.js";
import { xHeaderMiddleware } from "./middlewares/my_middleware.js";

let bookRouter = Router()
//rule define
bookRouter.get("/all", xHeaderMiddleware, GetAllBooks)
bookRouter.get("/single/:id", GetBookById)
//route level middleware
bookRouter.post("/create", CreateBook)
bookRouter.put("/update", UpdateBook)
bookRouter.delete("/delete/:id", DeleteBook)

export default bookRouter