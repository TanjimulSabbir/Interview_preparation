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


// for loop
// while loop
// while...do loop
// for...in loop
// for...of loop

// This is for loop

let oddNumbers = [];
for (let i = 0; i < 50; i++) {
    // this will stop the whole code execution
    if (i === 45) {
        break
    }
    // this will just skip when i==5
    if (i === 5) {
        continue
    }

    if ((i % 2) !== 0) {
        oddNumbers.push(i)
    }
}

// console.log(Array.from({ length: 5 }, (_, index) => index + 1))

// This is while loop
let i = [];
while (i.length == false) {
    i.push(Boolean)
}
// console.log(i);

// This is do...while loop

let d = 0;
do {
    d++;
    // console.log(d)
} while (d < 6)

// This is for...of loop
let forOfData = ["Tanjimul", "Islam", "Sabbir"];

for (let valhallah of forOfData) {
    console.log(valhallah)
}

// functions

// Anonymous function
// console.log((function (x, y) {
//     console.log(x, y);
//     return x + y;
// })(4, 5));


// callback funtion
const myFunc = (data, func) => {
    return func(data)
}

const add = (data) => {
    return data.reduce((total, currentValue) => total + currentValue, 0)
}

const subtract = (data) => {
    return data.reduce((total, currentValue) => total - currentValue, 0)
}

const multiply = (data) => {
    return data.reduce((total, currentValue) => total * currentValue, 1)
}
const divide = (data) => {
    return data.reduce((total, currentValue) => total / currentValue)
}

const result = myFunc([1, 2, 3,4], divide);

console.log(result, "result");