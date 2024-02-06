// read file
const fs = require('fs')

// async read
fs.readFile('./myfile.txt', function(err,data){
    if(err) console.log(err)
    console.log(`async read =`, data) // buffer
    console.log(`sync read =`, data.toString())  // string
})

/* 
    readFile(path,callback)
    readFileSync(path)
*/