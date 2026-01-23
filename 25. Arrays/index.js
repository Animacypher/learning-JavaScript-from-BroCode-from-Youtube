// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits[2] = "coconut"
//fruits.push("coconut"); //to push a value behind
//fruits.pop(); // to remove last value
//fruits.unshift("mango") // to add a value in the 1st place
//fruits.shift(); // to remove the 1st value
/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);  */

//let numOfFruits = fruits.length
//let index = fruits.indexOf("orange") // -1 if not found
//console.log(index);

//for(let i = 0; i < fruits.length; i++){
//for(let i = 0; i < fruits.length; i+=2){
/*for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}*/

fruits.sort(); // sort in alphabetical order/ .reverse() to reverse the order

for(let fruit of fruits){
    console.log(fruit);
}