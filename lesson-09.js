// call by reference
// function fn(arr) {
//   arr[0] = 100;
// }

// let arr = [20, 30, 40];
// let ans = fn(arr);

// console.log(arr);

// // call by value
// function fn(x) {
//     return x + 10;
// }

// let x = 10;
// let ans = fn(x)

// // console.log(ans)
// console.log(x)

// ----------------------------------------------
// function showMessage(name, fn) {
//   console.log(`hello ${name}`);

//   fn(name);
// }

// function sayGoodBye(name) {
//   console.log("Good Bye! ", name);
// }

// showMessage("umair", sayGoodBye);

// sayGoodBye('umair')

// function add(a, b) {
//   return a + b;
// }

// let sum = add(12, 10);
// console.log(sum);

// ---------------------------------------------
let a = 10;

console.log(a);

// var products = [
//   {
//     id: 101,
//     title: "Sony LED 40 inch",
//     variations: [
//       { id: 1, color: "black", price: 50000, quantity: 5 },
//       { id: 2, color: "red", price: 50000, quantity: 1 },
//       { id: 3, color: "silver", price: 55000, quantity: 8 },
//     ],
//     reviews: [
//       {
//         id: 1,
//         user: "Ahmad",
//         rating: 4.0,
//         title: "Good Product",
//         comments: "It is a very good product ....",
//         date: "06-02-2021",
//         status: true,
//       },
//       {
//         id: 2,
//         user: "Zubair",
//         rating: 4.5,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//       },
//       {
//         id: 3,
//         user: "Ali",
//         rating: 5.0,
//         title: "bad Product",
//         comments: "ali It is a very good product ....",
//         date: "04-02-2021",
//         status: true,
//       },
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
//       {
//         id: 1,
//         user: "Ahmad",
//         rating: 4.0,
//         title: "Good Product",
//         comments: "It is a very good product ....",
//         date: "06-02-2021",
//         status: true,
//       },
//       {
//         id: 2,
//         user: "Zubair",
//         rating: 4.5,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//       },
//       {
//         id: 3,
//         user: "Ali",
//         rating: 5.0,
//         title: "bad Product",
//         comments: "ali It is a very good product ....",
//         date: "04-02-2021",
//         status: true,
//       },
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
//       {
//         id: 1,
//         user: "Ahmad",
//         rating: 4.0,
//         title: "Good Product",
//         comments: "It is a very good product ....",
//         date: "06-02-2021",
//         status: true,
//       },
//       {
//         id: 2,
//         user: "Zubair",
//         rating: 3.0,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//       },
//     ],
//   },
// ];

// console.log(products[1])
// Product <id> = avg rating (count)

// Product 101 = 3.5(3)
// Product 102 = 3.5(3)
// Product 103 = 3.5(3)

// let product = {
//   id: 101,
//   title: "Sony LED 40 inch",
//   variations: [
//     { id: 1, color: "black", price: 50000, quantity: 5 },
//     { id: 2, color: "red", price: 50000, quantity: 1 },
//     { id: 3, color: "silver", price: 55000, quantity: 8 },
//   ],
//   reviews: [
//     {
//       id: 1,
//       user: "Ahmad",
//       rating: 4.0,
//       title: "Good Product",
//       comments: "It is a very good product ....",
//       date: "06-02-2021",
//       status: true,
//     },
//     {
//       id: 2,
//       user: "Zubair",
//       rating: 4.5,
//       title: "Very Good Product",
//       comments: "zubair It is a very good product ....",
//       date: "05-02-2021",
//       status: false,
//     },
//     {
//       id: 3,
//       user: "Ali",
//       rating: 5.0,
//       title: "bad Product",
//       comments: "ali It is a very good product ....",
//       date: "04-02-2021",
//       status: true,
//     },
//   ],
// };

// function countReviews(product) {
//   return product.reviews.length;
// }

// function productAverageRating(product) {
//   let sum = 0;

//   for (let i = 0; i < product.reviews.length; i++) {
//     sum += product.reviews[i].rating;
//   }

//   let avg = sum / product.reviews.length;

//   return avg;
// }

// function displayProduct (product) {
//     console.log(`Product ${product.id} = ${productAverageRating(product)}(${countReviews(product)})`)
// }

// for(let i=0; i<products.length; i++) {
//     displayProduct(products[i])
// }

// displayProduct(products[0])
// displayProduct(products[1])
// displayProduct(products[2])
// const totalCount = countReviews(products[2]);
// const avgRating = productAverageRating(products[0])
// console.log(totalCount);
// console.log(avgRating)

// for (var i = 0; i < products.length; i++) {
//   var product = products[i];

//   var sum = 0;
//   for (var j = 0; j < product.reviews.length; j++) {
//     sum += product.reviews[j].rating;
//   }

//   var avg = sum / product.reviews.length;
// //   console.log(
// //     "Product " + product.id + " = " + avg + "(" + product.reviews.length + ")"
// //   );

//   console.log(`Product ${product.id} = ${avg}(${product.reviews.length})`)

// }

// -----------------------------------------------
// function calc(x, y, op) {
//     if (op === "+") {
//       return x + y;
//     }

//     if (op === "-") {
//       return x - y;
//     }

//     if (op === "*") {
//       return x * y;
//     }

//     if (op === "/") {
//       return x / y;
//     }
//   }

//   let sum = calc(20, 30, "+")
//   let sub = calc(40, 10, "-")
//   let mul = calc(2, 10, "*")

//   console.log('sum:', sum)
//   console.log('sub:', sub)
//   console.log('mul:', mul)
// function add(a, b) {
//   return a + b;
// }

// let sum = add(2, 3)
// console.log(sum)
