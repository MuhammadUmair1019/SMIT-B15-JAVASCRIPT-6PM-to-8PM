// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// let marks = [10, 20, 30]; // 60

// function myReduce(array, callback, initVal) {
//   let acc = initVal !== undefined ? initVal : array[0];
//   let index = initVal !== undefined ? 0 : 1;

//   for (let i = index; i < array.length; i++) {
//     acc = callback(acc, array[i]);
//   }

//   return acc;
// }

// let sum = myReduce(marks, (acc, curr) => {
//   console.log("acc", acc);
//   console.log("curr", curr);
//   return acc + curr;
// });

// console.log("sum:", sum);

// let sum = users.reduce((acc, curr) => {
//   console.log('acc', acc)
//   console.log('curr', curr)

//   return acc + curr.age
// }, 0)

// console.log(sum)

// let marks = [10, 20, 30]; // 60

// let sum = marks.reduce((acc, curr) => {
//   console.log('acc', acc)
//   console.log('curr', curr)
//   console.log('-------------')
//   return acc + curr
// }, 0)

// console.log(sum)

// let sum1 = marks.reduce((prevVal, currVal) => {
//   console.log("prevVal", prevVal);
//   console.log("currVal", currVal);
//   return prevVal + currVal;
// });
// console.log(sum1);

// console.log("----------------");

// function myReduce(array, callback, initVal) {
//   let acc = initVal !== undefined ? initVal : array[0]; // 10
//   let startingIndex = initVal !== undefined ? 0 : 1

//   console.log(acc)
//   for (let i = startingIndex; i < array.length; i++) {
//     // acc - 10
//     // curr -  10

//     acc = callback(acc, array[i]);
//   }

//   return acc;
// }

// let sum2 = myReduce(marks, (acc, curr) => acc + curr);

// console.log("sum:", sum2);

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// let sum = users.reduce((acc, curr) => {
//   console.log("acc", acc);
//   console.log("curr", curr);
//   return acc + curr.age;
// }, 0); // Initial value set to 0

// console.log(sum);

// let marks = [10, 20, 30] // 60

// let sum = marks.reduce((prevVal, currVal) => prevVal + currVal, 0)
// console.log(sum)

// ----------------------------------------------------
// let products = [
//   {
//     id: 101,
//     title: "Sony LED 40 inch",
//     variations: [
//       { id: 1, color: "black", price: 50000, quantity: 5 },
//       { id: 2, color: "red", price: 50000, quantity: 1 },
//       { id: 3, color: "silver", price: 55000, quantity: 8 },
//     ],
//     reviews: [
//       { id: 1, user: "Ahmad", rating: 4.0, status: true },
//       { id: 2, user: "Zubair", rating: 4.5, status: false },
//       { id: 3, user: "Ali", rating: 5.0, status: true },
//     ],
//   },
//   {
//     id: 102,
//     title: "Mobile",
//     variations: [
//       { id: 1, color: "black", price: 50000, quantity: 5 },
//       { id: 2, color: "red", price: 50000, quantity: 1 },
//       { id: 3, color: "silver", price: 55000, quantity: 8 },
//     ],
//     reviews: [
//       { id: 1, user: "Ahmad", rating: 4.0, status: true },
//       { id: 2, user: "Zubair", rating: 4.5, status: false },
//     ],
//   },
//   {
//     id: 103,
//     title: "Bike",
//     variations: [
//       { id: 1, color: "black", price: 55000, quantity: 5 },
//       { id: 2, color: "red", price: 50000, quantity: 1 },
//     ],
//     reviews: [
//       { id: 1, user: "Ahmad", rating: 4.0, status: true },
//       { id: 2, user: "Zubair", rating: 3.0, status: false },
//     ],
//   },
// ];

// let product = products[0];
// let sum = 0;
// product.reviews.forEach((review) => sum += review.rating);

// let avgRating = sum / product.reviews.length;
// console.log(sum);
// console.log(avgRating)

// let marks = [20, 30, 40];

// let arr = marks.find(m => m === 30)
// console.log(arr)
