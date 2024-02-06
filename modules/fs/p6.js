const fs = require('fs')

const data = "\n \n Next line content All file system operations have synchronous, callback, and promise-based forms,and are accessible using both CommonJS syntax and ES6 Modules (ESM) \n"

fs.appendFileSync('./test2.txt', data)
    console.log(`file append completed`)