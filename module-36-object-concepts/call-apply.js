const Kibriya = {
    name: "RJ Kibriya",
    money: 5000,
    id: 101,

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

const golamKibriya = {
    id: 103,
    money: 3000,
    name: "golam Kibriya",
};

//call
Kibriya.treatDey.call(heroBalam, 500, 200, 50);
Kibriya.treatDey.call(heroBalam, 300, 100, 30);

//apply (parameter should be under array)

Kibriya.treatDey.apply(heroBalam, [500, 100, 50]);
Kibriya.treatDey.apply(heroBalam, [1000, 100, 100]);
Kibriya.treatDey.apply(golamKibriya, [1000, 200, 49]);