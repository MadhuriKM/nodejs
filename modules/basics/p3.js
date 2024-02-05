for(let i=0 ; i<3;i++) {
    let name = "John doe";
    console.log("Hi, my name is " + name)
}

function additionFunction(a, b) {
    return a + b;
}
 
let num1 = 5;
let num2 = 10;
let sum = additionFunction(num1, num2);
console.log("Sum of given numbers is :", sum);

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"


 function myFunction(a, b) {
    return a / b;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);