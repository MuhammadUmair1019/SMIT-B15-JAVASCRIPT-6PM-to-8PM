// data modeling 

var product = {
  id: 101,
  title: "Wireless Headphones",
  variations: [
    { id: 1, color: "black", price: 500, quantity: 4 },
    { id: 2, color: "red", price: 1000, quantity: 2 },
    { id: 3, color: "green", price: 1500, quantity: 1 },
    { id: 4, color: "gold", price: 2000, quantity: 10 },
  ],
};

// console.log(product.variations[1].color)
// console.log(product.variations.length)

var totalQuantity = 0;
for (var i = 0; i < product.variations.length; i++) {
  // console.log(product.variations[i])
  totalQuantity = totalQuantity + product.variations[i].quantity;
}

var avg = totalQuantity / product.variations.length;

console.log(totalQuantity);
console.log(avg);

// var product = {
//   title: "Wireless Headphones",
//   price: 1000,
//   quantity: 10,
//   color: ['black', 'red', 'green']
// };

// console.log(product.color[2])

// var marks = [4, 6, 8, 20]; // 4 length

// var sum = 0
// for (var i = 0; i < marks.length; i++) {
//     // i -> 0
//     // 1- 0 + 4 = 4
//     // 2- 4 + 6 = 10
//     // 3- 10 + 8 = 18
//     // 4- 18 + 20 = 38
//     sum = sum + marks[i]
// }

// var avg = sum / marks.length
// console.log("sum: " + sum);
// console.log("avg: " + avg);

// ---------------------------------------------
// non-primitive data types (array, object)
// var students = [
//   {
//     id: 101,
//     name: "ali",
//     marks: 80,
//     pass: true,
//   },
//   {
//     id: 102,
//     name: "ahmed",
//     marks: 30,
//     pass: false,
//   },
//   {
//     id: 103,
//     name: "zubair",
//     marks: 90,
//     pass: true,
//   },
// ];

// console.log(students[0].id + "-" + students[0].name + "-" + students[0].pass);
// console.log(students[1].id);
// console.log(students[2].id);

// ------------------------------------------------------
// var s1 = {
//     // key: value
//     name: "ali",
//     marks: 80,
//     pass: true
// }

// var s2 = {
//     name: "ahmed",
//     marks: 30,
//     pass: false
// }

// var s3 = {
//     name: "zubair",
//     marks: 90,
//     pass: true
// }

// console.log(s1.marks)
// console.log(s2.marks)
// console.log(s3.marks)

// console.log(s2)
// console.log(s3)

// var names = ['ali', 'ahmed', 'zubair']
// var marks = [80, 30, 90];
// var pass = [true, false, true]
// var arr = ['ali', 30, true]
// console.log(arr)

// console.log(names)
// console.log(marks)
// console.log(pass)

// ----------------------------------------------------------
/// dynamic
// var marks = [80, 60, 90, 40]
// var index = 6;
// marks[index] = 70
// console.log(marks)
// console.log(marks[index])

// marks.push(20)
// console.log(marks[1])

// basic data types  (string, number, boolean)
// var name = "ahmed";
// console.log(name)

// var marks = 20;
// console.log(marks)

// var pass = true;
// console.log(pass)
