var car = "Audi "

const Product = () => {
    const device = "Apple (Mac Book Air)"
    return function () {
        return car + device
    }

}

console.dir(Product())