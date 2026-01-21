// const = a variable that cannot be changed
/*
let pi = 3.14159;
let radius;
let circumference;

pi = 42; // This will work because pi is not a constant here, can be changed for malicious purposes
*/

const pi = 3.14159; // This is a constant, cannot be changed
let radius;
let circumference;

/*
radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);
circumference = 2 * pi * radius;
console.log(circumference);
*/

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}