var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    price: 4000,
    status: false,
    colors: ["red", "black", "blue"],
  },
  {
    id: 102,
    title: "Mobile",
    price: 4000,
    status: true,
    colors: ["blue", "red"],
  },
  {
    id: 103,
    title: "Bike",
    price: 5000,
    status: true,
    colors: ["green", "gold"],
  },
];

// let marks = [20, 30, 60, 20, 70];

// let m = marks.find(m => m === 100)
// console.log(m)

// let filterProductByColors = products.filter((p) => p.colors.filter((c) => c === "red").length);
let filterProductByColors = products.filter((p) => p.colors.find((c) => c === "red"));

// let filterProductByColors = products.filter((p) => {
//   //   for (let i = 0; i < p.colors.length; i++) {
//   //     if (p.colors[i] === "gold") {
//   //       return true;
//   //     }
//   //   }

//   //   let c = p.colors.filter((c) => c === "red");
//   //   if (c.length) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

// //   let c = p.colors.filter((c) => c === "red");
// //   return c.length;

//   return p.colors.filter((c) => c === "red").length;
// });

console.log(filterProductByColors);

// let filterProduct = products.filter(p => !p.status)
// console.log(filterProduct)

// let productTitles = products.map((p) => p.title);
// let productPrices = products.map((p) => (p.price * 100) / 10);
// console.log(productTitles);
// console.log(productPrices);

// [ "Sony LED 40 inch", "Mobile", "Bike"]

// ------------------------------------------------------------
// let marks = [20, 30, 60, 70];

// function myFilter(array, callback) {
//   let copyArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       copyArray.push(array[i]);
//     }
//   }

//   return copyArray;
// }

// let filterArr = myFilter(marks, (m) => m < 65);
// console.log(filterArr)

// for (let i = 0; i < marks.length; i++) {
//     if(marks[i] < 40) {
//         filterArr.push(marks[i])
//     }
// }

// console.log(filterArr)

// ------------------------------------------------------------
// let marks = [20, 30, 60, 70];

// let mapArr = marks.map(m => m < 40 ? m + 10 : null).filter(m => m)

// console.log(mapArr)

// let filterArr = marks.filter((m) => m < 40).map(m => m + 10);

// let arr = marks.filter(m => m < 40 ? true : false)
// let modifyArr = filterArr.map((m) => m + 10);

// console.log(filterArr);
// console.log(modifyArr);

// let arr = marks.map((m) => (m < 40 ? m + 10 : null)); // [30, 40]
// let arr = marks.map((m) => {
//   if (m < 40) {
//     return m + 10;
//   }
// }); // [30, 40]

// let arr = marks.map((m) => {
//   if (m < 40) {
//     return m + 10;
//   } else {
//     return m;
//   }
// });

// let arr = marks.map(m => m + 10) // [30, 40, 50, 60]

// let array = []
// // for(let i=0; i < marks.length; i++) {
// //     array[i] = marks[i] + 10
// // }

// marks.forEach((m, i) => {
//     array[i] = m + 10
// })

// console.log(array)
