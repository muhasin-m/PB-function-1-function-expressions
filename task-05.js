/*
Task 05

Rewrite the function declaration below as a function expression
*/

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize("table")); // Table
console.log(capitalize("cat")); // Cat
console.log(capitalize("hello")); // Hello
