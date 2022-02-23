/* 1. let const 
2. template string 
    2. a : use Variable 
    
    2. b : use object property 
3. arrow Function
3. a. with one paramenter.will return the number after dividing by 5; 
3. b. with two parameter . will add two to each number and then multply the result. 

3. c three paramenters . will multiply all tree paramenters. 

3. d. two parameter . but it will be multiline arrow function . will add two each number and mulply three. 

make sure your return the result 

4.[Home Wokk ]: JS function declaration vs arrow function 


5. array of numbers and then map to get each element multiply by five. Must use arrow function . 
6. [chanllenging] number of array. get odd numbers by using filter with arrow fuction . 

7. [challenging] array of oject (eg product). Use find to get the object with price 5000. 
8. You have an object Use destructuring to create a simple variable of any property of the object.  for a simple object. 
9. [challenging] you have an array . Now use destrucing to create a simple (or omore ) variable to get the third element of the array in a vaiable called 'three. 

10 . [optional] Just a write a function with tree parameters and the last parameter will have a default parameter with value . This function will take three parameter and will return the sum of all the three paramenters. 

*/

// 1.
let mice = 6;
mice = 9;
const dog = 9;

const result = mice + dog;
console.log(result);

// 2.
// const a = `Samsun Naher`;
// const b = `nurul Islam & ${a}`;
// console.log(b);

// 3.
const a = (x) => x / 5;
const b = (x, y) => (x + 2) * (y + 2);

console.log(a(5));
console.log(b(2, 4));

const muliply = (x, y, z) => x * y * z;
const muliply2 = (x, y) => {
    const add = x + 2;
    const add2 = y + 2;
    const result = (add + add2) * 3;
    return result;
};