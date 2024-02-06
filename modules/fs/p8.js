const fs = require('fs')

fs.unlinkSync('./test1.txt')

console.log(`sync method of file unlinked successfully`)