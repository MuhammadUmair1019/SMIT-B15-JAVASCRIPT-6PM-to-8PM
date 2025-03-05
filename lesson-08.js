function calc(x, y, op) {
  if (op === "+") {
    return x + y;
  }

  if (op === "-") {
    return x - y;
  }

  if (op === "*") {
    return x * y;
  }

  if (op === "/") {
    return x / y;
  }
}

let sum = calc(20, 30, "+")
let sub = calc(40, 10, "-")
let mul = calc(2, 10, "*")

console.log('sum:', sum)
console.log('sub:', sub)
console.log('mul:', mul)

// --------------------------------------------------------
// function add(a = 0, b = 0) {
//   console.log(a, b);
//   let sum = a + b;
//   return sum;
// }

// console.log(add());

// ----------------------------------------
// function add(a, b) {
//   let sum = a + b;
//   return sum
// }

// let sum = add(10, 20)
// console.log(sum)

// function add(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }

// add(20, 30)
// add(10, 20)
// add(10, 20)
// add(10, 20)
// add(10, 20)

// function add() {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   console.log(sum);
// }

// add()

// --------------------------------------------
// keyword  name
// Function Declaration
// function showMessage() {
//   console.log("hello, world");
//   console.log("hello, world");
//   console.log("hello, world");
//   console.log("hello, world");
//   console.log("hello, world");
//   console.log("hello, world");
// }

// showMessage()
// console.log('-----------')
// showMessage()
// console.log('-----------')
// showMessage()
// console.log('-----------')
// showMessage()

// --------------------------------------------------------
// let s1 = { name: "ahmed", age: 20 };
// let s2 = s1;
// console.log(s1, s2)

// s1.age = 24;
// s1.marks = 50;

// console.log('---------after change-------')
// console.log(s1, s2)

// console.log('-----------------------------------')
// let x = 10;
// let y = x;

// x = 20;

// console.log("x:", x);
// console.log("y:", y);

// ----------------------------------------------------
// basic data types (primitive types)
// string, number, boolean, undefined, null
// reference data types (non-primitive types)
// object
//  array, object, function

// let arr = [20, 30, 40, 50];
// arr[4] = 60;
// console.log(arr)

// const arr1 = [10, 20, 30, 50];
// arr1[4] = 60;

// console.log(arr1)

// --------------------------------------------
// var x = 10;
// x = 20;
// console.log(x)

// let y = 10;
// y = 20;
// console.log(y)

// const z = 10;
// z = 20;
// console.log(z)
