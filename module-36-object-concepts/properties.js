const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleaned: true,
};

//Getting all properties names
const keys = Object.keys(bottle);

//Object property name will return as an array by method;

console.log(keys);

//Getting all values;
const values = Object.values(bottle);
console.log(values);

//Object property value will return as an array by method;

//Getting All object;
const pairs = Object.entries(bottle);
console.log(pairs);
// this is called two dimentional array

//Seal Gala kore lock kora

Object.seal(bottle);
bottle.price = 100;
// You cannot delete existing property or insert new property but you can modify current value .

//Freeze
Object.freeze(bottle);
// you cannot delete existing property ,insert new property and modifify of new property /

//TO Delete any property and property value use delete objName.property;
delete bottle.isCleaned;
console.log(bottle);