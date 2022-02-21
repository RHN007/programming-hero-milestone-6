const numbers = [4, 6, 8, 10];
// const output2 = [];

// const doubleIt = (number) => number * 2;
// // console.log(doubleIt(5));

// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }

// console.log(output2);

//1. Loop through each element
//2. for each element call the provided function
//3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
const output = numbers.map((x) => x * 2);
console.log(output);

const squares = numbers.map((x) => x * x);
console.log(squares);