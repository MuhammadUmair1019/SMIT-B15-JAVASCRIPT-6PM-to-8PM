// -----------------------------------------------
// sort
// let marks = [10, 14, 13, 5, 4, 0];
// marks.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// marks.sort((a, b) => a - b);

// console.log(marks);

//-----------------------------------------------------------------------
// let colors = ["red", "black", "red", "black", "red", "green", "green", "black"];

// sample output
// { red: 2, green: 1, black: 2 }

// let output = (1 + 2, 2 + 4);
// console.log(output);

// let colorCount = colors.reduce((acc, color) => (acc[color] = (acc[color] || 0) + 1, acc),{});
// console.log(colorCount)

// console.log(colorCount);

// let colorCount = colors.reduce((acc, color) => {
//   acc[color] = (acc[color] || 0) + 1;
//   return acc;
// }, {});

// console.log(colorCount);

// -----------------------------------------
// let colorCount = {};
// for (let i = 0; i < colors.length; i++) {
//   let color = colors[i];
//   // colorCount[color] = (colorCount[color] + 1 || 1)
//   colorCount[color] = (colorCount[color] || 0) + 1;
// }

// console.log(colorCount);

// -----------------------------------------------
// colorCount['red'] = 1
// colorCount.blue = 5

// colorCount['blue'] = colorCount['blue'] + 1 // 5
// colorCount[color] = colorCount[color] + 1 // 5
// console.log(colorCount)

// for (let i = 0; i < colors.length; i++) {
//   let color = colors[i];
//   if (colorCount[color]) {
//     colorCount[color] = colorCount[color] + 1;
//   } else {
//     colorCount[color] = 1;
//   }
// }

// console.log(colorCount);

// ---------------------------------------------
// let marks = [20, 30, 40];

// let total = marks.reduce((acc, m) => acc + m); // 90
// console.log(total)

// let result = [
//   { name: "Ali", score: 80 },
//   { name: "Ahmed", score: 60 },
//   { name: "Zubair", score: 30 },
// ];

// let totalScore =  result.reduce((acc, curr) => {
//     // 1-
//     // acc -> { name: "Ali", score: 80 },
//     // curr ->   { name: "Ahmed", score: 60 },

//     // 1-
//     // acc -> 0,
//     // curr -> { name: "Ali", score: 80 },

//     // 2-
//     // acc -> 140

//     return acc + curr.score //  140
// }, 0)

// console.log(totalScore)
