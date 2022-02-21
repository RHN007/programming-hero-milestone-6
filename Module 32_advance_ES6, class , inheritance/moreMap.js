const friends = ["tom Hanks", "tom Cruiese", "tom Brady", "tom Solaiman"];

const fLenghts = friends.map((friend) => friend.length);

// console.log(fLenghts);

const products = [
    { name: "water Bottle", price: 50, color: "yellow" },
    { name: "Mobile Phone", price: 1050, color: "color" },
    { name: "Smart Watch", price: 150, color: "black" },
    { name: "Sticky Notes", price: 30, color: "pink" },
    { name: "water Glass", price: 3, color: "White" },
];

const productNames = products.map((product) => product.name);
const productPrice = products.map((product) => product.price);

// products.map((product) => console.log(product));

products.forEach((product) => console.log(product));

// console.log(productNames);
// console.log(productPrice);