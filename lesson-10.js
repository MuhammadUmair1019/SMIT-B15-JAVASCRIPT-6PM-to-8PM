// Demonstrating ES6 features: Arrow Functions, map, and filter

// Sample array of student marks
let studentMarks = [20, 20, 70, 80];

// Custom implementation of the map function
function customMap(array, callbackFunction) {
  let resultArray = [];
  
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    resultArray.push(callbackFunction(array[i], i, array));
  }
  
  return resultArray;
}

// Function to modify array elements by adding 10
function addTen(marks) {
  return marks + 10;
}

// Arrow function alternative for modifying array elements
let addTenArrow = (marks) => marks + 10;

// Using the custom map function
const updatedMarks = customMap(studentMarks, addTenArrow);
console.log(updatedMarks); // Output: [30, 30, 80, 90]

// Using filter and map to modify values conditionally
let filteredAndMappedMarks = studentMarks
  .filter((marks) => marks < 70) // Filter marks less than 70
  .map((marks) => marks + 10); // Add 10 to the filtered values

console.log(filteredAndMappedMarks); // Output: [30, 30]

// Another approach using map with a conditional check
let updatedMarksWithCondition = studentMarks.map((marks) => 
  marks < 70 ? marks + 10 : marks
);
console.log(updatedMarksWithCondition); // Output: [30, 30, 70, 80]

// -----------------------------------------------------------
// Function as a parameter example - Calculator
let calculator = (num1, num2, operationFunction) => operationFunction(num1, num2);

// Basic arithmetic operations using arrow functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let maxNumber = (a, b) => (a > b ? a : b);
let minNumber = (a, b) => (a < b ? a : b);

// Example usage of the calculator function
let multiplicationResult = calculator(3, 2, multiply);
console.log(multiplicationResult); // Output: 6

// ------------------------------------------------------------
// Calculator function using if-else conditions
function basicCalculator(num1, num2, operation) {
  if (operation === "+") return num1 + num2;
  if (operation === "-") return num1 - num2;
  if (operation === "*") return num1 * num2;
  if (operation === "/") return num1 / num2;
  if (operation === "max") return num1 > num2 ? num1 : num2;
  if (operation === "min") return num1 < num2 ? num1 : num2;
}

let minimumValue = basicCalculator(3, 2, "min");
console.log(minimumValue); // Output: 2

// ------------------------------------------------------
// Variations of Arrow Functions

// Different arrow function syntaxes
(x, y) => x + y; // Two parameters, single-line return
(x) => x + 1; // Single parameter, parentheses required
x => x + 1; // Single parameter, parentheses optional
() => console.log("Hello"); // No parameters
_ => console.log("Hello"); // Using underscore as a placeholder

// Arrow function returning an object
let getUser = () => ({ name: "Ahmed", age: 23 });
console.log(getUser()); // Output: { name: 'Ahmed', age: 23 }

// Another function example
let sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 2)); // Output: 4
