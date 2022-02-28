const Kibriya = {
    name: "RJ Kibriya",
    money: 5000,
    id: 101,

    treatDey: function(expense) {
        this.money = this.money - expense;
        console.log("Here ", this);
        return this.money;
    },
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: "hero Balam",
};

const golamKibriya = {
    id: 103,
    money: 3000,
    name: "golam Kibriya",
};

Kibriya.treatDey(100);

const heroTreatDey = Kibriya.treatDey.bind(heroBalam);

heroTreatDey(500);
const normalTreatDey = Kibriya.treatDey.bind(golamKibriya);
normalTreatDey(300);