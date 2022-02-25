/* data types 

primitive data typess 
1. Number
2. string; 
3 . boolean 
4. undefined
5. null 
6. symbol

non-primitive 

1. object
*/
let a = "hello";
let b = a;
console.log(a, b);
a = "gallo";
console.log(a, b);

const x = { job: "Web Developer" };
const y = x;
console.log(x, y);
// x.job = "front end developer";
y.job = "front end developer";
console.log(x, y);