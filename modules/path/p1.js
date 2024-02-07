const path = require('path')

const filePath = path.resolve(__dirname)
console.log(`resolve =`, filePath)

const filePath1 = path.resolve(__dirname, 'docs', 'pdf', 'test.pdf') // absolute path
console.log(`resolve =`, filePath)

const filePath2 = path.resolve(__dirname, '/docs', '/pdf', '/test.pdf')
console.log(`join =`, filePath2)

const filePath3 = path.resolve('p1.js')
console.log(`resolve fiel path =`, filePath3)

const filePath4 = path.extname('p1.js')
console.log(`extname =`, filePath4)
