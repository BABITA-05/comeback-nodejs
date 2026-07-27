let books = [
    {
        id: 1,
        name: "History",
        price: 1200.50,
        author: "John Writer",
        reviews: ""
    },
    {
        id: 2,
        name: "Geography",
        price: 899.99,
        author: "Sarah Explorer",
        reviews: ""
    },
    {
        id: 3,
        name: "English Literature",
        price: 1500.00,
        author: "Emily Poet",
        reviews: ""
    },
    {
        id: 4,
        name: "Computer Science",
        price: 2500.75,
        author: "Alan Coder",
        reviews: ""
    },
    {
        id: 5,
        name: "Economics",
        price: 999.49,
        author: "Adam Thinker",
        reviews: ""
    },
    {
        id: 6,
        name: "Philosophy",
        price: 1345.20,
        author: "Sophia Mind",
        reviews: ""
    },
    {
        id: 7,
        name: "Psychology",
        price: 1780.00,
        author: "Carl Dreamer",
        reviews: ""
    },
    {
        id: 8,
        name: "Art & Design",
        price: 2100.65,
        author: "Leon Painter",
        reviews: ""
    },
    {
        id: 9,
        name: "Music Theory",
        price: 875.30,
        author: "Melody Singer",
        reviews: ""
    },
    {
        id: 10,
        name: "Astronomy",
        price: 3200.99,
        author: "Neil Star",
        reviews: ""
    }
]

export let GetAllBooks = (req, res, next)=>{
    next({
        message:"all books fetched successfully",
        data:books
    })
    // res.status(200).json({
    //     message:"all books fetched successfully",
    //     data:books
    // })
}

export let GetBookById = (req, res)=>{
    let id = req.params.id
    let matchedBook = books.find((ele)=>ele.id === Number(id))
    res.status(200),json({
        message:`book with id ${id} fetched successfully`,
        data:matchedBook
    })
}

export let CreateBook = (req, res)=>{
    let {name, price, author} = req.body
    let newBook = {
        id:books.length,
        name: name,
        price: price,
        author: author
    }
    books.push(newBook)
    res.status(200).json({
        message:"book created successfully",
        data: newBook
    })
}

export let UpdateBook = (req, res)=>{
    let id = req.params.id
    let {name, price, author} = req.body
    let oldBook = books.find((ele)=>ele.id === Number(id))
    if(!oldBook){
        //404 noot found error
        return res.status(404).json({
            message:`book with id ${id} not found`,
        })

    }
    //updating
    oldBook.name = name
    oldBook.price = price
    oldBook.author = author
    res.status(200).json({
        message:"book updated successfully",
        data: oldBook
    })
}

export let DeleteBook = (req, res)=>{
    let id = req.params.id
    let foundBookIndex = books.findIndex((ele)=>{
        return ele.id === id
    })
    if (foundBookIndex < 0){
        return res.status(404).json({
            message:"book not found"
        })
    }
    //delete element from arary
    books.splice(foundBookIndex, 1)
    res.status(200).json({
        message:"book deleted successfully",
        data:books
    })
}

export let  AddReviewsToBook = (req, res)=>{
    let id = req.params.id
    //todo validate for id
    let {reviews} = req.body
    //todo:validate empty reviews
    let intId = Number(req.params.id)
    let matchedBook = books.find((ele)=>ele.id === intId)
    if(!matchedBook){
        return res.status(404).json({
            message:`book with id ${intId} not found`
        })
    }
    //updating reviews
    matchedBook.reviews = reviews
    res.status(200).json({
        message : "book reviews updated successfully"
    })
}

export let statsOfBook = (req, res)=>{
    let totalPrice = books.reduce(
        (acc, ele)=>{
            return ele.price + acc

        }, 
        0
    )
    let totalBooks = books.length
    let averagePrice = totalPrice/totalBooks
    //todo:sabai bhanda mahango ra sasto book kun ho??
    res.status(200).json({
        message:"stats of books", 
        data:{
            "total-Price": totalPrice,
            "total_books": totalBooks,
            "avg_price":averagePrice,
            "low-book":null,
            "high-book":null
        }
    })
}




