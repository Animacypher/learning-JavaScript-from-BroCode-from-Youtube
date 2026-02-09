// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .prevoiusElementSibling
// .parentElement
// .children

// ------ .firstElementChild ------
//const element = document.getElementById("fruits");
/*
const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";*/
const ulElementsF = document.querySelectorAll("ul");
ulElementsF.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}) // Selects all first child of ul tag


// ------- .lastElementChild --------
/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "red";    */
const ulElementsL = document.querySelectorAll("ul");
ulElementsL.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red";
})


// ------- .nextElementSibling -------
/*
const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "lightgreen";   */


// --------- .parentElement --------- // targets the parent of the selected ID
/*
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "purple";    */


// --------- .children --------- // targets the children of the selected ID
const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "brown";
});