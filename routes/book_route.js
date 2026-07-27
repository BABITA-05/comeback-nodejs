import { Router } from "express";
import { AddReviewsToBook, CreateBook, DeleteBook, GetAllBooks, GetBookById, statsOfBook, UpdateBook } from "../handlers/book_handler.js";
import { xHeaderMiddleware } from "../middlewares/my_middleware.js";

let bookRouter = Router()
//rule define
bookRouter.get("/all", xHeaderMiddleware, GetAllBooks)
bookRouter.get("/single/:id", GetBookById)
//route level middleware
bookRouter.post("/create", CreateBook)
bookRouter.put("/update", UpdateBook)
bookRouter.delete("/delete/:id", DeleteBook)
bookRouter.post("/:id/reviews", AddReviewsToBook)
bookRouter.get("/stats", statsOfBook)

export default bookRouter