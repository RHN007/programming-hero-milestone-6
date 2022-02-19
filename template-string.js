const priya = "Asif Akbar";
const meye = "Meye Tumi Ki Dukkho Chino";
const kopita = `Kobita Tumi Sopno CHarini `;
const multiline =
    "This is my first line.\n" + "This is second line \n" + "this is forth line";
const multilineNew = `this is my first line
this is second line
this is fourth line 
this is fifth line`;

const friedns = ["abul", "babul", "kabul", "sabul"];
const count = 5;
const oldHeader = `<h3 class="friend-name">Friend-4</h3>`;
const oldHeade2 = '<h3 class="friend-name">Friend-' + count + "</h3>";
const new1 = `<h3 class="friend-name">Friend-${friedns.length} </h3>`;

const first = "mamun ";
const last = "chowdhury";
const fullOld = first + " " + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${
  friedns.length * 500
}.He lives in Dhaka`;
console.log(fullNew);
// console.log(new1);