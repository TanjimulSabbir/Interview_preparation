// var car = "Audi "

// Product(1, 2, 3)

// const Product = () => {
//     const device = "Apple (Mac Book Air)"
//     console.log(arguments.length)
//     return function () {
//         return car + device
//     }

// }

// function example() {
//     console.log(arguments); // Arguments object
//     console.log(arguments.length); // Length property
//     console.log(arguments[0]); // Accessing elements using indices
// }
// example('Hello', 42, true);

const arrayLike = { 0: "Tanjimul", 1: "Islam", 2: "Sabbir", 3: "is a", 4: "software developer" }
// console.log(Object.keys (arrayLike))
console.log(Array.from(arrayLike))