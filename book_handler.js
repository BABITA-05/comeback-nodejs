let books = [
    {
        id:1,
        name:"MAth",
        price:456.88,
        author:"Comeback Man"
    },
    {
        id:2,
        name:"Science",
        price:4506.88,
        author:"Comeback woman"

    }
]
export let GetAllBooks = (req, res)=>{
    res.status(200).json({
        message:"all books fetched successfully",
        data:books
    })
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

