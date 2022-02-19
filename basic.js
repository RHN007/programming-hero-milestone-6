// variable Declaration

var name = "farid";

let name2 = "ali";
const name3 = "jamal";

//consdition

if (name.length > name2.length) {
    console.log("farid is bigger");
} else if (name2.length < name3.length) {
    console.log("Ali is smaller");
} else {
    console.log("jamal is larger");
}

//ARRAY
const numbers = [45, 64545, 34645, 2345435];

const numberCount = numbers.length;

numbers.push(222);
numbers.pop();
numbers[2] = 555;

//cheque wheahter 222 included in the array

if (numbers.indexOf(222) != -1) {}

if (numbers.includes(222)) {}

//loop
//while , for

for (const number of numbers) {}

//function
function fullName(first, second) {
    const name = first + "" + second;
}
const person = fullName("rahim", "ali");

//object
const bottle = { color: "yellow", constain: "water", price: 45 };