const express = require('express')
const PORT = 4545

// ref
const app = express()

// app.request(router,controller)

//home path, index path
app.get('/', function(req,res){
    res.send(`<div>
                    <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                </nav>
                <h1>Home Page</h1>
            </div>`)
})

// about page
app.get('/about', function(req,res){
    res.send(`<div>
                    <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                </nav>
                <h1>About Page</h1>
            </div>`)
})

app.get('/*', function(req,res){
    res.send(`<div>
                    <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                </nav>
                <h1>Page Not found</h1>
            </div>`)
})

app.listen(PORT,() => {
    console.log(`server is running @ http://localhost:${PORT}`)
})