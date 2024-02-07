const zlib = require('zlib')
const fs = require('fs')

let gzip = zlib.createGzip()

let r = fs.createReadStream('test.gz')
let w = fs.createWriteStream('newtst.txt')

r.pipe(gzip).pipe(w)

console.log(`zip file created`)