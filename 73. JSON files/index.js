// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and web application
//        JSON files {key:value} OR [value1, value2, value3]

// JSON.stringfy() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

const names = ["Spongbob", "Patrick", "Squidward", "Sandy"];
const person = {"name": "Spongbob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}
const people = [{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": 33, "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}];

const jsonString1 = JSON.stringify(names);
console.log(jsonString1);
const jsonString2 = JSON.stringify(person);
console.log(jsonString2);
const jsonString3 = JSON.stringify(people);
console.log(jsonString3);

const JSONnames = `["Spongbob", "Patrick", "Squidward", "Sandy"]`;
const JSONperson = `{"name": "Spongbob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const JSONpeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                    {"name": "Patrick", "age": 33, "isEmployed": false},
                    {"name": "Squidward", "age": 50, "isEmployed": true},
                    {"name": "Sandy", "age": 27, "isEmployed": false}]`;

const parsednames = JSON.parse(JSONnames);
const parsedperson = JSON.parse(JSONperson);
const parsedpeople = JSON.parse(JSONpeople);
console.log(parsednames);
console.log(parsedperson);
console.log(parsedpeople);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)));