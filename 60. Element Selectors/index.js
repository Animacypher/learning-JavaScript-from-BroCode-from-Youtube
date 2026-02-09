// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()          // ELEMENT OR NULL
// 2. document.getElementsByClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName()    // HTML COLLECTION
// 4. document.querySelector             // ELEMENT OR NULL
// 5. document.querySelectorAll()        // NODELIST

// 1.
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "green";
myHeading.style.textAlign = "center";
console.log(myHeading);

// 2.
const fruits = document.getElementsByClassName("fruits");
//fruits[0].style.backgroundColor = "red";
/*for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}*/
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})
console.log(fruits);

// 3. 
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);
//h4Elements[0].style.backgroundColor = "yellow";
/*
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "red";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}*/
// OR
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "red";
})
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})

// 4.
const element = document.querySelector("h4");
//element.style.backgroundColor = "yellow"; //Only selects the first h4

// 5.
const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "green"; //Selects by index
foods.forEach(food => {
    food.style.backgroundColor = "blue";
})