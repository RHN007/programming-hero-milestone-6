class TeamMember {
    name;

    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = "Support Web Dev";
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }

    startSession() {
        console.log(this.name, "start a support session");
    }
}

class StudentCare extends TeamMember {
    designation = "Care Web Dev";

    buildRoutine(student) {
        console.log(this.name, "build a routine for", student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = "Neptune App Developer";
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }

    releaseApp(version) {
        console.log(this.name, "release app version", version);
    }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Salman Khan", "Dubai");
const sr = new Support("SR Khan", "Dubai");

const alia = new StudentCare("Alia Bhatt", "Mumbai");
const ash = new NeptuneDev("ash", "mumbai", "android studio");
ash.releaseApp("1.4.5");
console.log(ash);