const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleaned: true,
};

/* for (let i= 0; i<10; i++){}
for (const num of numbers){} // use in array; 
for (const prop in student){} // Use in object;  */

//You can access data : 1. objectName.property 2. ObjectName['property'] 3. objectName[expression]
for (const prop in bottle) {
    // console.log(bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);

for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

//advance

const entries = Object.entries(bottle);
// console.log(entries);

// const [key, value] = ["color", "yellow"];

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}