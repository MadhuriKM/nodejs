let age = 25;
 if(age >= 18) {
    console.log("you are major")
 } else {
    console.log("you are minor")
 };


 const num = -1;

 if (num > 0) {
    console.log("given number is positive.");
 } else if(num < 0) {
    console.log("given number is negative");
 } else {
    console.log("given number is zero");
 }

 let user = {
    id: 1,
    name: "john",
    email: "john@gmail.com"
 }
 console.log(`user =`, user)
 console.log(`name =`, user.name)
 console.log(`email =`, user.email)


 let emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
console.log(emp.id+" "+emp.name+" "+emp.salary); 