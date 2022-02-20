function add(num1, num2 = 0) {
    console.log(num1, num2);

    //Option 2
    num2 = num2 || 0;

    // option 1;
    if (num2 == undefined) {
        num2 = 0;
    }

    const total = num1 + num2;
    return total;
}

const resutl = add(15, 10);
console.log(resutl);

function fullName(first, last = "chowdhury") {
    const name = first + " " + last;
    return name;
}