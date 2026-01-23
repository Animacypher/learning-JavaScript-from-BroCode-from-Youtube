// rest parameters = (...rest) allow a function work with a variable 
//                   number of arguments by bundling them into an array

//                   spread = expands an array into seperate elements into an array
//                   rest = bundles seperate elements into an array

function openFridge(...foods){ //rest parameter
//    console.log(foods);
    console.log(...foods);  // spread parameter

}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge(food1, food2, food3, food4, food5)


function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
//const total = sum(1, 2, 3, 4, 5);
//console.log(`Your total is ${total}`);
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total = getAverage(75, 100, 85, 90, 50);
console.log(total);


function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "squarepants", "III");
console.log(fullName);