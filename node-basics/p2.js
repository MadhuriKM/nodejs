const { x, y, z, status } = require('./data')
const item = require('./data')

let { sum, prod, mod } = require('./fun')

console.log(`x = `, x)

console.log(`y = `, item.y)
console.log(`z = `, item['z'])

let r1 = sum(x,y)
console.log(`sum =`, r1)
