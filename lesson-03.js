// conditional statement
// falsy: false, undefined, null, 0, ""
// truthy: true, " ", any number except zero

var username = "ahmed";
var age = 17;

var x = "" || 1;
var y = (2 && " " && "") || null; // true or false

// true && true;
// true && false;
// var y = 2 && " " && "" || 1; // true or false

// if (y) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// console.log(true || true)
// console.log(false || true)
// console.log(false || false || true)

// logical operators
// && // AND
// || // OR
// ! // NOT
// 17 >= 18 // false

// ! Not operator
// if(age >= 18 || username.trim() !== "ahmed") {
//     console.log("TRUE")
// } else {
//     console.log("FALSE")
// }

// ||
// if(age >= 18 || username.trim() === "ahmed") {
//     console.log("TRUE")
// } else {
//     console.log("FALSE")
// }

// &&
// if(age >= 18 && username === "ahmed") {
//     console.log("TRUE")
// } else {
//     console.log("FALSE")
// }

// var x = 5;

// if(x) {
//     console.log("TRUE")
// } else {
//     console.log("FALSE")
// }
