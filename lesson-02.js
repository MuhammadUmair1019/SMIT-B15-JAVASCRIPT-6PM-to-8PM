// var a = 2; // 2
// var b = 1; // 1

// a = a + b; // 3
// b = a - b; // 3 - 1 = 2
// a = a - b; // 3 - 2 = 1
// console.log(a, b);

// solution 1
// var a = 10; // 5
// var b = 5; // 10
// var c = a; // 10
// a = b; // 5
// b = c;

// console.log("a: " + a)
// console.log("b: " + b)
// console.log(c)

// --------------------------------------------------------
// control flow
// https://www.w3schools.com/js/js_comparisons.asp
// var x = 5;

// if(x <= 5) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// if(x != 5) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if(x === "5") {
//     console.log(true)
// } else {
//     console.log(false)
// }

// var title1 = " Mobile ";
// var title2 = "mobile";

// if (title1.toLowerCase().trim() == title2.toLowerCase().trim()) {
//   console.log("TRUE");
// } else {
//   console.log("False");
// }

// var title1 = " Mobile ";
// var title2 = "mobile";

// if (title1.toLowerCase().trim() == title2.toLowerCase().trim()) {
//   console.log("TRUE");
// } else {
//   console.log("False");
// }

// ------------------------------------------------
// var username = prompt("Enter your name");
// console.log(username)

// alert("Your name is " + username);

// var firstName = "Muhammad";
// var lastName = "Umair";

// console.log(firstName + " * " + lastName)
// alert(firstName + " * " + lastName)

// ----------------------------------------------------------
// var title = "Mobile";
// console.log(title.length);

// string indexing
// m o b i l e
// 0 1 2 3 4 5

// console.log(title.charAt(1))
// var index = title.length - 1
// console.log(title[index])
// console.log(title.slice(0, 4))
// console.log(title.slice(0))

// string method
// console.log('----------------')
// console.log(title.charAt(0))
// console.log(title.trim());
// console.log(title.toLowerCase().trim());
// console.log(title.toUpperCase().trim());

// ------------------------------------------------------------------
// primitive (basic data types) -> number, string, boolean, undefined, null
// var username = "ahmed"; // string
// var marks = 80; // number
// var pass = true; // boolean

// var x = 10;
// console.log(x) // 10

// var y;
// console.log(y) // undefined

// console.log(z) // error

// var x;
// console.log(typeof x) // undefined

// var y = null;
// console.log(typeof y) // object

// 1username = 'ahmed'; // invalid
// *username = 'ahmed'; // invalid
// user name = 'ahmed'; // invalid
// user-name = 'ahmed'; // invalid
// user*name = 'ahmed'; // invalid

// user1name = 'ahmed'; // invalid
// user_name = 'ahmed'; // valid
// $user_name = 'ahmed'; // valid
// _user_name = 'ahmed'; // valid

// var a = 10;
// var b = "20";
// var c = "ahmed";

// console.log(a + b); // 1020
// console.log(a * b); // 200
// console.log(a * c); // NaN
// console.log(a / b); // 0.5
