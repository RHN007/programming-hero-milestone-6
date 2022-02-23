//JavaScript object Notation
//JSON
const user = { id: 11, name: "gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: "alia Store",
    address: "Ranbir Road",
    produts: ["laptop", "mobile", "pepsi"],
    owner: { Name: "Alia Bhat", professeion: "actor" },
    isExpensive: false,
};
const shopStringified = JSON.stringify(shop);

// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);