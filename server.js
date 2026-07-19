import express from "express"

let myOwnServer = express()

//adding capability to parse accept json data
myOwnServer.use(express.json())

//get rule
myOwnServer.get("/who-are-you", (request, response) => {
    response.send("I am a server that listen your request @localhost:4444")
})
//get rule with json response
myOwnServer.get("/info", (req, res) => {
    res.json({
        message: "my server info",
        data: {
            version: "1.0.0",
            name: "Restart SeaA Api"
        }
    })
})
//get rule with path /greet
myOwnServer.get("/greet", (req, res) => {
    res.json({
        message: "Welcome to my server"
    })
})
//get rules with params (dynamic route)
myOwnServer.get("/me/:id", (req, res) => {
    let myId = req.params.id
    res.json({
        message: "Your info is successfully fetched",
        data: {
            id: myId,
            info: "Your name is thaha xaina"
        }
    })
})
//post rule
myOwnServer.post("/todo/create", (req, res) => {
    let recData = req.body
    res.json({
        message: "Your todo created successfully",
        data: recData
    })
})
//put rule
myOwnServer.put("/todo/update/:todoId", (req, res) => {
    //which data to update
    let tId = req.params.todoId
    //what to update
    let data = req.body
    res.json({
        message: "todo updated successfully",
        data: {
            id: tId,
            todo_data: data
        }
    })
})
//delete rule
myOwnServer.delete("/todo/delete/:id",(req,res)=>{
    let id=req.params.id
    res.json({
        message:"todo deleted successfully",
        data:{
            id:id
        }
    })
})
//listening server at 4444
myOwnServer.listen(
    4444,
    () => {
        console.log("my own server started at 4444")
    }
)