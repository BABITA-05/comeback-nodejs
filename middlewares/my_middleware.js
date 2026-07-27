let _myPrivateSecretKey = "qwerty"
export let xHeaderMiddleware = (req, res, next)=>{
    let headers = req.headers
    let xSecretKey = req.headers['x-secret-key']
    if(!xSecretKey){
        return res.status(401).json({
            message:"x secret key is not available on header"
        })

    }
    if(xSecretKey !== _myPrivateSecretKey){
        return res.status(401).json({
            message:"x secret key is invalid"
        })
    }
    next()
}


export let loggerMiddleware = (req, res, next)=>{
    let time = Date.now()
    console.log(`[${time}] ${req.mrthod} ${req.url}`)
    next()
}