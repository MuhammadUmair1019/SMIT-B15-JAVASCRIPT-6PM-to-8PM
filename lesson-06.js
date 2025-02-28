var marks = [20, 30, 40, 100, -5];

var max = marks[0];
var min = marks[0];

for (var i = 0; i < marks.length; i++) {
  // max
  if (marks[i] > max) {
    max = marks[i];
  }

  // min
  if (marks[i] < min) {
    min = marks[i];
  }
}

console.log(max);
console.log(min);

// ---------------------------------------------

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

// for (var i = 0; i < products.length; i++) {
//   var product = products[i];
//   console.log(product.reviews);

//   var sum = 0;
//   for (var j = 0; j < product.reviews.length; j++) {
//     sum += product.reviews[j].rating;
//   }

//   var avg = sum / product.reviews.length;
//   console.log(
//     "Product " + product.id + " = " + avg + "(" + product.reviews.length + ")"
//   );

//   console.log(product);
//   var sum = 0;
//   for (var j = 0; j < product.reviews.length; j++) {
//     sum = sum + product.reviews[j].rating;
//   }

//   var avg = sum / product.reviews.length;
//   console.log(
//     "Product " + product.id + " = " + avg + "(" + product.reviews.length + ")"
//   );
// }

// -------------------------------------------------
// nested loops
// debugger
// for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 4; j++) {
//     console.log(i, j);
//   }
// }

// ----------------------------------------------
// var product = {
//   id: 101,
//   title: "Wireless Headphones",
//   variations: [
//     { id: 1, color: "black", price: 500, quantity: 4 },
//     { id: 2, color: "red", price: 1000, quantity: 2 },
//     { id: 3, color: "green", price: 1500, quantity: 1 },
//     { id: 4, color: "gold", price: 2000, quantity: 10 },
//   ],
//   reviews: [
//     {
//       id: 1001,
//       name: "Ahmed",
//       comment: "Very good product!",
//       rating: 4.5,
//       date: "2-28-2025",
//       status: true,
//     },
//     {
//       id: 1002,
//       name: "Ali",
//       comment: "Very good product!",
//       rating: 4,
//       date: "2-28-2025",
//       status: true,
//     },
//     {
//       id: 1004,
//       name: "Zubair",
//       comment: "Very bad product!",
//       rating: 2,
//       date: "2-28-2025",
//       status: false,
//     },
//     {
//       id: 1004,
//       name: "Mujtaba",
//       comment: "Very bad product!",
//       rating: 2.5,
//       date: "2-28-2025",
//       status: false,
//     },
//   ],
// };

// for (var i = 0; i < product.reviews.length; i++) {
//   if (!product.reviews[i].status) {
//     console.log(product.reviews[i]);
//   }
// }

// find average rating of reviews
// var sum = 0;
// for(var i=0; i < product.reviews.length; i++) {
//     sum = sum + product.reviews[i].rating
// }
// var avgRating = sum / product.reviews.length
// console.log('Rating = ' + avgRating)

// Reviews length
// var totalReviews = product.reviews.length
// console.log(totalReviews)
