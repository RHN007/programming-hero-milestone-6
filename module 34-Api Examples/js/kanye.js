const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => displayQuotes(data));
};

const displayQuotes = (quote) => {
    const quoteELement = document.getElementById("quote");
    quoteELement.innerText = quote.quote;
};

const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`;
console.log(bondCode);

const data = { result: [{ userName: { title: "Mr.", name: "sakib khan" } }] };

console.log(data.result[0].userName.name);

// Which array method will you use to obtain an array containing the cubes of array p?
const p = [1, 2, 3];
const q = p.map((n) => Math.pow(n, 3));

console.log(q);

// https: //stackoverflow.com/questions/14220321/how-to-return-the-response-from-an-asynchronous-call/48415961#48415961

const info = { name: "", phoneNumber: null };
console.log(JSON.stringify(info));

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));

// console.log(JSON.stringify({ eventName: "birthday", date: Date().tomorrow() }));
// const date = Date;
console.log(JSON.stringify({ eventName: "birthday", date: "2022-02-21" }));

console.log;
JSON.stringify({ eventName: "birthday", date: new Date().tomorrow() })();