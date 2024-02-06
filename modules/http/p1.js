const http = require('http')

let server = http.createServer(function(req,res){
    res.write('Welcome to nodejs') // used to write and send chunk of the response to server
    res.end()
})

server.listen(4000,()=>{
    console.log(`server is up, running at http://localhost:4000`)
})