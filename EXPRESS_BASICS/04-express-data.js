const express = require('express')
const products = require('./data/products')
const PORT = 3435

const app = express()

app.get(`/`, function (req,res){
    res.status(200).json({ msg: "index message"})
})

app.get(`/api/products`, function (req,res){
    res.status(200).json({ length: products.length, products})
})

app.all(`*`, function(req,res){
    res.status(404).json({ msg: "Requested path not found"})
})

app.listen(PORT , function(){
    console.log(`server is running @ http://localhost:${PORT}`)
}) 

// get => read
// post => create
// put/patch => update