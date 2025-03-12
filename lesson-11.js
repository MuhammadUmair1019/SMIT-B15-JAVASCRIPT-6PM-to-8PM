// ES-6 (arrow function, map, filter)

let marks = [20, 20, 70, 80];

function myMap(arr, callback) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    array.push(callback(arr[i], i, arr));
  }

  return array;
}

function modifyArr(m) {
  return m + 10;
}

let callback = (m) => m + 10;

const arr = myMap(marks, callback);
console.log(arr);

// let array = marks.filter(m => m < 70).map(m => m + 10)

// let arr1 = array.map(m => m + 10)

// let array = marks.filter(m => m < 70 ? true : false)

// let array = marks.map((m) => {
//   if (m < 70) {
//     return m + 10;
//   }

//   return null
// }); // [30, 40]

// let array = marks.map(m => m < 70 && m + 10) // [30, 40]

// let array = marks.map(m => m < 70 ? m + 10 : m)
// let array = marks.map((m) => {
//   if (m < 70) {
//     return m + 10;
//   } else {
//     return m;
//   }
// });

// console.log(marks);
// console.log(array);
// console.log(arr1)

// let array = []
// for(let i =0; i < marks.length; i++) {
//     array[i] = marks[i] + 10
// }

// console.log(array)

// -----------------------------------------------------------
// let calculator = (x, y, f) => f(x, y);
// let sum = (x, y) => x + y;
// let sub = (x, y) => x - y;
// let mul = (x, y) => x * y;
// let divide = (x, y) => x / y;
// let max = (x, y) => (x > y ? x : y);
// let min = (x, y) => (x < y ? x : y);

// let ans = calculator(3, 2, mul);
// console.log(ans);

// ------------------------------------------------------------
// function calculator(x, y, op) {
//   if (op === "+") {
//     return x + y;
//   }

//   if (op === "-") {
//     return x - y;
//   }

//   if (op === "*") {
//     return x * y;
//   }

//   if (op === "/") {
//     return x / y;
//   }

//   if (op === "max") {
//     return x < y ? x : y;
//   }

//   if (op === "min") {
//     return x < y ? x : y;
//   }

// //   if (op === "max") {
// //     if (x > y) {
// //       return x;
// //     } else {
// //       return y;
// //     }
// //   }

// //   if (op === "min") {
// //     if (x < y) {
// //       return x;
// //     } else {
// //       return y;
// //     }
// //   }
// }

// let ans = calculator(3, 2, 'min')
// console.log(ans)

// ------------------------------------------------------
// nameless function
// variations - left side of arrow function
// (x, y) => x + y;
// (x) => x + 1;
// x => x + 1;
// () => console.log("hello");
// _ => console.log("hello")

// variations - right side of arrow function
// var sum = (x, y) => x + y;
// var ans = sum(2, 2);
// console.log(ans);

// (x, y) => {
//   let z = x + y;
//   return z * 2;
// };

// () => {
//     return {name: 'ahmed', age: 23}
// }

// () => ({name: 'ahmed', age: 23})

// let s = (x, y) => {
//     return x + y
// }

// function sum(x, y) {
//     return x + y
// }

// sum(2, 2) // 4
