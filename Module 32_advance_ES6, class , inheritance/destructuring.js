const fish = {
    id: 58,
    name: "king Hilsha",
    price: 9000,
    phone: "0171755555",
    address: "chadpur",
    dress: "silver",
};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;
console.log(phone, price);
console.log(phone, dress);
console.log(phone, id);

const company = {
    name: "gp",
    ceo: { id: 1, name: "ajmol", food: "fuchka" },
    web: {
        work: "website development",
        employee: 22,
        framwork: "react",
        tech: { firs: "HTML", second: "CSS", third: "JS" },
    },
};

const { work, framwork } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framwork, food, second);