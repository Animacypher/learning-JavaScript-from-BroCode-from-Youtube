// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// 1. EASY WAY = no need to edit HTML file
//let username = window.prompt("What's your username?");
//or
/*let username;

username = window.prompt("What's your username?");

console.log(username);*/

// 2. PROFESSIONAL WAY = need to edit HTML file

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    //console.log(username); // to see in console
    document.getElementById("myH1").textContent = `Hello ${username}`;
}