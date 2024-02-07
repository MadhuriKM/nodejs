const vm = require('vm')

//object
let user = {
    name: "David",
    email: "david@gmail.com",
    mobile: "9988776655",
    age: 24
}

console.log(`before = `, user)

vm.createContext(user)
vm.runInContext(`name="John";email="john@gmail.com";age+=3;`,user)

console.log(`after =`, user)