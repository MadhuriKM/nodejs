
// buffer module => memory allocation, it stores the data in ascii format -> 2 digit hex value

const buf = Buffer.alloc(4) // allocate buffer memory
console.log('safe memory =', buf)

const buf1 = Buffer.allocUnsafe(4)  // un safe buffer (may store garbage value)
console.log(`un safe memory =`, buf1)

// from => decodes the unicode characters into ascii
const  buf2 = Buffer.from('Madhuri')
console.log(`from =`, buf2)
console.log(`from =`, buf2.toString())

// concat
const a1 = Buffer.from("Hi, Iam madhuri ")
const a2 = Buffer.from(" Iam Full stack developer.")

const res = [a1,a2]
const out = Buffer.concat(res)

console.log(`output =`, out)
console.log(`output =`, out.toString())