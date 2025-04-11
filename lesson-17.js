let heading = document.querySelector("h1")

heading.innerHTML = "Heading"

let para = document.querySelector("p")
console.log(para)


// ------------------------------------------------------------------------------
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

// let productsSummary = products.map((product) => ({
//   title: product.title,
//   totalVariations: product.variations.length,
//   totalReviews: product.reviews.length
// }));

// console.log(productsSummary);


// const max = products.reduce((acc, item) => {
//     let totalStock = item.variations.reduce((sum, variation) => sum + variation.quantity, 0)

//     if(totalStock > acc.totalStock) {
//         return {title: item.title, totalStock}
//     }
//     return acc

//  }, { title: "", totalStock: 0 });
//  console.log(max);

