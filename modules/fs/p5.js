const fs = require('fs')

const data ="\n \n Next line content All file system operations have synchronous, callback, and promise-based forms,and are accessible using both CommonJS syntax and ES6 Modules (ESM) \n";

fs.appendFile('./test1.txt', data, function(err){
    if(err) console.log(err)
    console.log(`file append completed`)
})