// large data file

const fs = require('fs')

for(let i=0; i< 500; i++) {
    fs.writeFileSync('./big.txt', `hello world, ${i}\n`, { flag: 'a'})
}
console.log(`write completed`)