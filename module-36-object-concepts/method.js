const student = {
    name: "RJ Kibriya",
    money: 5000,
    id: 101,
    subject: "Mathmatics",
    subjects: ["english", "economics", "math 101", "calculus"],
    bestFriend: {
        name: "kundu",
        major: "mathmatics",
    },
    takeExam: function() {
        console.log(this.name, "taking exam");
    },
    treatDey: function(expense, bokshish) {
        this.money = this.money - expense - bokshish;
        return this.money;
    },
};
student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 100);
console.log(remaining2);