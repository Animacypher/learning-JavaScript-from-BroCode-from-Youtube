// RANDOM NUBER GENERATOR

const myButton = document.getElementById("myButton");
const lable1 = document.getElementById("label1");
const lable2 = document.getElementById("label2");
const lable3 = document.getElementById("label3");
const min = 1;
const max = 6;
let ranodmNum1;
let ranodmNum2;
let ranodmNum3;

myButton.onclick = function(){
    ranodmNum1 = Math.floor(Math.random() * max) + min;
    ranodmNum2 = Math.floor(Math.random() * max) + min;
    ranodmNum3 = Math.floor(Math.random() * max) + min;
    lable1.textContent = ranodmNum1;
    lable2.textContent = ranodmNum2;
    lable3.textContent = ranodmNum3;
}