// type conversion = change the datatype of  a value to another
//                   (string, number, boolean)

// String to number
/*let age = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age, typeof age);*/

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN = not a number
console.log(y, typeof y); // only shows "undefined" when there's no value
console.log(z, typeof z); // true = any value that is not empty string, 0, null, undefined, or NaN
