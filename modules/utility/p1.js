const util = require('util')

// template
let msgTemplate = `Hi %s, welcome to %s and duration is %d months`;

/* %s => string, %d number */

let u1 = util.format(msgTemplate,"John","JavaScript",1.3);
let u2 = util.format(msgTemplate,"Sony","Java",2.5)

console.log(`u1 =`, u1)
console.log(`u2 =`, u2)