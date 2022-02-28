const Kibriya = {
    name: "RJ Kibriya",
    money: 5000,
    id: 101,
    treatDeyArrow: () => {
        console.log(this);
    },

    treatDey: function(expense, bokshish, tax) {
        this.money = this.money - expense - bokshish - tax;
        console.log("Here ", this);
        return this.money;
    },
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: "hero Balam",
};

function add(a, b) {
    console.log(this);
}