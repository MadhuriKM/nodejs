const fs = require('fs')

const stream = fs.createReadStream('./big.txt')

stream.on('data', (result) => {
    console.log(`result = `, result) // buffer
    console.log(`string =`, result.toString())
})

stream.on('error',(err) => {
    console.log(err)
})