const numbers = [5, 15, 7, 41, 29, 79, 30, 5, 2, 19];
const bigNumbers = numbers.filter((number) => number > 20);
const smallNumbers = numbers.filter((number) => number < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    { name: "water Bottle", price: 50, color: "yellow" },
    { name: "Mobile Phone", price: 1050, color: "black" },
    { name: "Smart Watch", price: 150, color: "black" },
    { name: "Sticky Notes", price: 30, color: "pink" },
    { name: "water Glass", price: 3, color: "White" },
];

const expensive = products.filter((product) => product.price > 100);
// console.log(expensive);

const blacks = products.filter((product) => product.color == "blue");

console.log(blacks);

const whiteItem = products.find((product) => product.color == "blue");
console.log(whiteItem);