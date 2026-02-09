// ------- EXAMPLE 1 <h1 -------

// STEP 1 CRTEATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1); //it becomes the last child
// document.body.prepend(newH1); //it beomces the first child
// document.getElementById("box1").append(newH1); //appends inside box1

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2); 
//inserts newH1 before box2

// REMOVE HTML ELEMENT
document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1); //to remove from box1