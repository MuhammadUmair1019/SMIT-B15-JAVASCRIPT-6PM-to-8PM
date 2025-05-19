// --------------------------------------------
// Understanding JavaScript Prototypes and Object.create()
// --------------------------------------------

// A reusable set of user methods using prototypal inheritance
const userMethods = {
  login() {
    console.log(`${this.username} has logged in`);
  },
  logout() {
    console.log(`${this.username} has logged out`);
  },
  increaseScore() {
    console.log("Score increased by 20");
  },
};

function createUser(username, email) {
  const user = Object.create(userMethods); // user.__proto__ === userMethods
  user.username = username;
  user.email = email;
  return user;
}

const userOne = createUser("Ali", "ali@gmail.com");
const userTwo = createUser("Ahmed", "ahmed@gmail.com");

console.log(userOne); // Inherits login, logout, increaseScore from userMethods
console.log(userTwo);

// Uncomment to test functionality:
// userOne.login();
// userTwo.logout();

// --------------------------------------------
// Alternate 1: Naive Factory Function (No Prototype Sharing)
// --------------------------------------------

// This version creates a new copy of each method for every user object,
// which is memory inefficient.

// function createUser(username, email) {
//   const user = {};
//   user.username = username;
//   user.email = email;
//   user.login = function () {
//     console.log(`${this.username} has logged in`);
//   };
//   user.logout = function () {
//     console.log(`${this.username} has logged out`);
//   };
//   return user;
// }

// --------------------------------------------
// Alternate 2: Hardcoded Objects (No Reusability)
// --------------------------------------------

// const userOne = {
//   username: "Ali",
//   email: "ali@gmail.com",
//   login() {
//     console.log(`${this.username} has logged in`);
//   },
//   logout() {
//     console.log(`${this.username} has logged out`);
//   },
// };

// const userTwo = {
//   username: "Ahmed",
//   email: "ahmed@gmail.com",
//   login() {
//     console.log(`${this.username} has logged in`);
//   },
//   logout() {
//     console.log(`${this.username} has logged out`);
//   },
// };

// --------------------------------------------
// Function Borrowing using call, apply, and bind
// --------------------------------------------

function loginWithMessage(greeting, message) {
  console.log(`${this.username} has logged in`);
  console.log(greeting, message);
}

function logout() {
  console.log(`${this.username} has logged out`);
}

const userThree = {
  username: "ali",
  email: "ali@gmail.com",
  login: loginWithMessage,
  logout,
};

const userFour = {
  username: "ahmed",
  email: "ahmed@gmail.com",
};

// Using call (invokes immediately with args individually)
userThree.login.call(userFour, "Welcome", "Glad to see you!");

// Using apply (invokes immediately with args as array)
loginWithMessage.apply(userFour, ["Hello", "You're logged in."]);

// Using bind (returns a new function with bound context)
const boundLogin = loginWithMessage.bind(userFour);
boundLogin("Hi", "Nice to meet you");

// --------------------------------------------
// Prototype Chain Exploration (Simple Demo)
// --------------------------------------------

// const baseObj = {
//   key1: "value1",
//   key2: "value2",
// };

// const derivedObj = Object.create(baseObj);
// derivedObj.key3 = "value3";

// console.log(derivedObj); // Own key: key3, inherited keys: key1, key2
// console.log(derivedObj.key1); // From baseObj