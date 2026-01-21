// while loop = repeat some code WHILE some condition is true
/*
let username;
do{
  username = window.prompt("Enter your name:");
}while (username === "" || username === null) 
console.log(`Hello ${username}`);
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "User" && password === "123456"){
        loggedIn = true;
        console.log("You are logged in!")
    }
    else{
        console.log("Invalid credentials! Please try again")
    }
}