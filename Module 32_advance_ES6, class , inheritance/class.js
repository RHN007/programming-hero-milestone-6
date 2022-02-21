class Support {
    name;
    designation = "Support Web Dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Salman Khan", "Dubai");
const sr = new Support("SR Khan", "Dubai");

aamir.startSession();
console.log(aamir);
console.log(salman);