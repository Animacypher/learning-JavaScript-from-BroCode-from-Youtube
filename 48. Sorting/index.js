// sort() = method use to sort elements of an array in place.
//          Sorts elements as srings in lexicographic order, not alphabetical
//          lexicographic = (aplhabet + numbers + symbols) as strings

// Alphabetical
let fruits = ["apple", "orange", "banana", "coconut", "pineapples"]
fruits.sort();
console.log(fruits);

// Numbers
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
//numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a); // reversed order
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}]
//people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);