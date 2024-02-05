// assert -> modulle used to handle run time server errors
// try catch => used to andle run time logical errors~

console.log(`welcome to node js`)

let x = 123
let y = 145

// let or const for variables don't use var
console.log(`product =`, x * y)

console.log(`sum =`, x + y)

let str = "welcome to nodejs"
console.log(`string =`, str)

let stat = true
console.log(`boolean =`, stat)

let colors = ['red','blue','green']
for(let i=0; i< colors.length; i++) {
    console.log(`colors =`, colors)
}
   
let txt    // undefined
console.log(`txt =`, txt)