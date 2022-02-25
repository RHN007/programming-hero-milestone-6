/* 
1. variable declared but value is not set . 
2. Function but didn't write return anything 
3. Just wrote return but didn't return anything
4. Parameter that is n't pass; 
5. Property that is n't object. 
6. Accessing array element out of range ; 
7. Accessing Deleted array element . 
8. Explicitly set value to undefined ; 


*/

function add(a, b) {
    const sum = a + b;
    return;
    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 7);
// console.log(fourth);
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}

double(81);

const fifth = { name: "sogir", age: 15, location: "bandorban" };

const sixth = [54, 12, 41, 3];
console.log(sixth[41]);

delete sixth[2];
console.log(sixth[2]);

const seventh = undefined;
console.log(seventh);

const myObj = { name: "samad", profession: null };