


// ---------------------------------------------------------------------
// let arr = [true, true, false, false]
// arr.sort((a, b) => a === true ? -1 : 1)

// console.log(arr)

// let marks = [2, 13, 4, 10, 0];

// marks.sort((a, b) => a - b); // -1, 1

// marks.sort((a, b) => (a < b ? -1 : 1)); // -1, 1

// marks.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else {
//     return 1;
//   }
// }); // -1, 1

// 2, 7 // 1  -> 7, 2
// console.log(marks);

// let names = ['Zubair', "Ali", "Mujtaba"]
// let marks = [2, 13, 4, 10, 0]
// marks.sort()
// names.sort()

// console.log(marks)
// console.log(names)

// ---------------------------------------------------------
// let products = [
//   {
//     id: 101,
//     title: "Sony LED 40 inch",
//     variations: [
//       { id: 1, color: "black", price: 50000, quantity: 5 },
//       { id: 2, color: "red", price: 50000, quantity: 1 },
//       { id: 3, color: "silver", price: 2000, quantity: 8 },
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
//       { id: 2, color: "red", price: 20000, quantity: 1 },
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
//       { id: 1, color: "green", price: 55000, quantity: 5 },
//       { id: 2, color: "red", price: 1000, quantity: 1 },
//     ],
//     reviews: [
//       { id: 1, user: "Ahmad", rating: 4.0, status: true },
//       { id: 2, user: "Zubair", rating: 3.0, status: false },
//     ],
//   },
// ];

// ---------------------------------------------------------------
// let minVariations = products.map((product) =>
//   product.variations.reduce((min, variation) =>
//     variation.price < min.price ? variation : min
//   )
// );

// console.log(minVariations);

// ------------------------------------------------
// const minVariation = (product) => {
//   let minIndex = 0;

//   //   for (let i = 0; i < product.variations.length; i++) {
//   //     if (product.variations[i].price < product.variations[minIndex].price) {
//   //       minIndex = i;
//   //     }
//   //   }

//   product.variations.forEach((variation, index) => {
//     if (variation.price < product.variations[minIndex].price) {
//       minIndex = index;
//     }
//   });

//   return product.variations[minIndex];
// };

// // let minVariations = minVariation(products[0]);
// let minVariations = products.map(minVariation);

// console.log(minVariations);

// [
//   { id: 3, color: "silver", price: 2000, quantity: 8 },
//   { id: 2, color: "red", price: 20000, quantity: 1 },
//   { id: 2, color: "red", price: 1000, quantity: 1 },
// ];
// variations: [
//     { id: 1, color: "black", price: 50000, quantity: 5 },
//     { id: 2, color: "red", price: 50000, quantity: 1 },
//     { id: 3, color: "silver", price: 2000, quantity: 8 },
//   ],

// function minVariation(product) {
//   let minIndex = 0;

//   for (let i = 0; i < product.variations.length; i++) {
//     if (product.variations[i].price < product.variations[minIndex].price) {
//       minIndex = i;
//     }
//   }

//   return product.variations[minIndex];
// }

// // let minVariations = minVariation(products[0]);
// let minVariations = products.map(minVariation);

// console.log(minVariations);

// let marks = [10, 5, 20, 100, 200]
// let min = marks[0]

// for(let i=0; i<marks.length; i++) {
//     if(marks[i] < min) {
//         min = marks[i]
//     }
// }

// console.log(min)

// 2- Use reduce to calculate the total stock of all products
// let totalStock = products.reduce((total, product) =>  {
//     return total + product.variations.reduce((sum, variation) => sum + variation.quantity, 0)
// }, 0)

// console.log(totalStock)

// --------------------------------------------------------------
// 2- Use filter to get all products that have variations in black color

// let filterProductsByColor = products.filter(
//   (product) =>
//     product.variations.find((variation) => variation.color === "black")
// );

// let filterProductsByColor = products.filter((product) => {
//     let filterVariations = product.variations.filter((variation) => variation.color === 'black')
//     if(filterVariations.length > 0) {
//         return true
//     } else {
//         return false
//     }
// });
// let filterProductsByColor = products.filter((product) => {
//   for (let i = 0; i < product.variations.length; i++) {
//     if (product.variations[i].color === "black") {
//       return true;
//     }
//   }
// });
// console.log(filterProductsByColor);
