// 1. let & const
const hubby = "Omor Sani";
let phone = "inphone 15";
phone = "Samsun Galaxy S17";

//2. default parameter
//5. spread or three dots
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
//3. Template Sting
const myNotes = `I am mojnu of ${hubby}. I dont have a laili`;
console.log(myNotes);

//4. Arrow Function

const square = (x) => x * x;
console.log(square(8));