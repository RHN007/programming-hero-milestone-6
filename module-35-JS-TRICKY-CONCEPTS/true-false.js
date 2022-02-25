/* Falsy 
false 
0
empty sting 
undefined 
null
NOT A NUMBER (NaN)



--------------------
Truthy: 
true 
any Number (positive or negative)
any Sting including single whitespace , '0'
'false'

Empty Array , {} , 

anything else that is not falsy is truthty 
 */

let x = [];
console.log("value of x", x);
if (x) {
    console.log("variable is truthy");
} else {
    console.log("variable  is falsy");
}