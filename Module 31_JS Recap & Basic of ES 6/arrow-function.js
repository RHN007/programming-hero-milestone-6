//Function declaration
function add(num1, num2) {
    return num1 + num2;
}

// function expression

const add2 = function add2(num1, num2) {
    return num1 + num2;
};

//function expression  (annonymous)
const add3 = function(num1, num2) {
    return num1 + num2;
};

//Arrrow Function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(15, 17);
const sum2 = add2(17, 15);
const sum3 = add3(14, 17);
const sum4 = add4(17, 15);
// document.getElementById('my-button').onclick = function handleEvent(){

// }

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);