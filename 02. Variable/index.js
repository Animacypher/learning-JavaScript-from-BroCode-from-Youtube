// variable = A container that stores a value
//            Behaves as if it were the value it contains

// 1. declaration   let x;
// 2. assignment    x = 100;

//let x = 123; // declaration + assignment
/*let x;
x = 100;

console.log(x);*/

/*let age = 25;
console.log(`You are ${age} years old.`);*/



/*let online = true;
console.log(typeof online);
console.log(`Are you online? ${online}`);*/

let fullName = "Sam Jo";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;