// hashing data

const crypto = require('crypto')

const hash = crypto.createHash('sha256');  // secured hash algo 128 256 512

let input = "test@gmail.com";

let data = hash.update(input).digest('base64url')  // hex, binary, base64, base64url

console.log('final digest ', data)