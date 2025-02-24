// non-primitive data types  (array)
var marks = [80, 70, 40];

// marks.push(90);
// marks.push(100);
// marks.unshift(40);

// to remove value at last index
var m = marks.pop();
console.log(marks);
console.log(m);
marks.push(m);

console.log(marks);

// console.log("Before " , marks)
// marks[0] = 90 // override
// marks[3] = 100 // add
// marks[marks.length] = 100 // add
// console.log("length", marks.length)
// marks[marks.length] = 200 // add
// console.log("After ", marks)

// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])

// var s1Marks = 80;
// var s2Marks = 70;
// var s3Marks = 40;

// console.log(s1Marks)
// console.log(s2Marks)
// console.log(s3Marks)

// var username = "ahmed";
// console.log(username);

// var marks = 80;
// console.log(marks);

// var pass = true;
// console.log(marks);

// -------------------------------------------------------------------
// loops

// for loop
// debugger
// for (var i = 1; i <= 10; i++) {
//     console.log("2 * " + i + " = " + i * 2);
//     //   document.write("2 * " + i + " = " + i * 2 + "<br/> ");
// }

// first iteration
// i -> 0 // 0
// 0 < 3 // true
// 0

// second iteration
// i -> 1 // 1
// 1 < 3 // true
// 1

// third iteration
// i -> 2 // 2
// 2 < 3 // true
// 2

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// ----------------------------------------------
// var num = 1;
// var result = num + 1;
// var result = num++; // post increment
// var result = ++num; // pre increment
// console.log(result)
// console.log(num)

// ------------------------------------------------
// Grade system
// var marks = 50;

// if (marks >= 90 && marks <= 100) {
//   console.log("A");
// } else if (marks >= 80 && marks <= 89) {
//   console.log("B");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("C");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("D");
// } else if (marks > 100) {
//   console.log("Invalid marks");
// } else {
//     console.log("F")
// }
