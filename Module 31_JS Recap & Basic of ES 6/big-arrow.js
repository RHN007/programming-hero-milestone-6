const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = (num) => num * 5;
const value = fiveTimes(17);

const getName = () => "Brandon Sam";
const name = getName();

console.log(result);
console.log(output);
console.log(value);
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
};

const total = doMath(12, 5);

console.log(total);

const y = (x) => x * x;
const z = y(5);

const numbers = [10, 20, 30, 40, 50, 60, 70];

const cars = ["toyota", "honda", "mercedes"];
const newCars = [...cars, "ferrari"];

console.log(newCars);