// middleware's are express controlers will be included after the path and before the main controller
// middleware are having tree params => req,res,next

//app.get(path, middleware, main_controller)

const express = require('express')
const logger = require('./middleware/logger')
const PORT = 4552

const app = express()

app.get(`/`, function (req,res){
    return res.status(200).json({ msg: `Welcome to home`})
})
app.get(`/api/time`, logger, function (req,res){
    const cTime = req.myTime
    return res.status(200).json({ msg: `time controller`, cTime})
})

app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})