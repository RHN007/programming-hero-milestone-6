//using object literal

const student = { name: "sakib Al Hasan", job: "cricketer" };

//2. Constructor
const person = new Object();
console.log(person);

//3.

// const human = Object.create(null)
const human = Object.create(student);
// console.log(human.job);

//4. Creating Object from Class (class is nothing but a function)
//This is syntactial sugar;
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People("Manus", 12);
console.log(peop);

//5.function

function Manus(name) {
    this.name = name;
}
const man = new Manus("kader");
console.log(man);