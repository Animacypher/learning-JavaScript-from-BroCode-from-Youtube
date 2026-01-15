// arithemthic operators = operands (values, variables, etc.)
//                         operators (+, -, *, /)
//                         ex. 11 = x + 5;

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;

//augmented assignment operators
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

/*  students++; //31
students--; //30  */

console.log(students);

/*
operators precedence
1. parentheses ()
2. exponents **
3. multiplication * , division / , modulus %
4. addition + , subtraction -
*/

// let result = 1 + 2 * 3 + 4 ** 2;
//let result = 12 % 5 + 8 /2;
let result = 6 / 2 ** (2 + 5);

console.log(result);