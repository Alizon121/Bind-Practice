const Employee = require("./employee.js")

function sayHello() {
    console.log('hello')
}
const newEmployee = new Employee("John Wick", "Dog Lover")

// let helloBound = newEmployee.sayName.bind(newEmployee)
helloBound = newEmployee.sayName
helloBound()
// setTimeout(() => newEmployee.sayName, 2000)

// setTimeout(helloBound, 2000)
let occupationBound = newEmployee.sayOccupation.bind(newEmployee)
setTimeout(occupationBound, 3000)
