const a = "alim uddin";
const b = 23;
const c = true;

//null
//undefined
//primitive
//object;

const nums = [23, 56, 34];
console.log(typeof nums);
//Array.isArray(nums)

function triple(x, y, z) {}
// console.log(typeof triple);
//console.log(triple.length);
console.log(typeof null);

let p = "Javascript";
let q = p;
p = "React";
console.log(q);

const isTrue = "false";
if (!isTrue) {
    console.log("hello");
} else {
    console.log("world");
}

function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
console.log(result);

if ("2" === 2) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}

function work(x, y = 4) {
    return x + y;
}
console.log(work(32));