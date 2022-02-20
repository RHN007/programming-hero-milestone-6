// const numbers = [4, 6, 8, 10];
// const output = [];
// for (const number of numbers) {
//     const result = number * 2;
//     output.push(result);
// }

// console.log(output);

// function min(nums) {
//     return Math.min(nums);
// }
// // console.log(min([1, 3, 2]));
// const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);

// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// // console.log(y);

const nums = [1, 2, 3, 4, 5];

let output = nums.filter((n) => n % 2);

console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];

const all = friends.find((friend) => friend.length == 5);

console.log(all);

const player = {
    name: { firstName: "Mashrafe", lastName: "Murtaza" },
    age: 38,
};

console.log(player.firstName);