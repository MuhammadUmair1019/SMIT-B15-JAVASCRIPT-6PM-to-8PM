class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} has logged in`);
    return this;
  }

  logout() {
    console.log(`${this.username} has logged out`);
  }

  incScore() {
    console.log(`Your current score is: ${this.score}`);
    this.score++;
    return this;
  }
}

class Admin extends User {
  constructor(username, email, role) {
    super(username, email);
    this.role = role;
  }

  deleteUser(user) {
    users = users.filter((u) => u.email !== user.email);
  }
}

const userOne = new User("ali", "ali@gmail.com");
const userTwo = new User("mujtaba", "mujtaba@gmail.com");
// chaining
userOne.login().incScore().incScore().logout();
console.log(userOne);

let users = [userOne, userTwo];
console.log("----------------------");
const admin = new Admin("ahmed", "ahmed@gmail.com", "admin");
console.log(admin);

admin.deleteUser(userTwo);
console.log(users);

// const userMethods = {
//   login() {
//     console.log(`${this.username} has logged in`);
//   },
//   logout() {
//     console.log(`${this.username} has logged out`);
//   },
//   incScore() {
//     console.log("Your score is 20");
//   },
// };

// function CreateUser(username, email) {
//   this.username = username;
//   this.email = email;

//   CreateUser.prototype.login = userMethods.login;
// }

// const userOne = new CreateUser("Ali", "ali@gmail.com");
// console.log(userOne);

// userOne.login();
// console.log(userOne);
// console.log("------------------");
// const userTwo = createUser("Ahmed", "ahmed@gmail.com");
// userTwo.login();
// console.log(userTwo);
// -----------------------------------------------------
// function login(greeting, message) {
//   console.log(this);
//   console.log(`${this.username} has logged in`);
//   console.log(greeting, message);
// }

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

// login.call(userOne, "Welcome", "Glad to see you!");
// login.apply(userTwo, ["Welcome", "Nice to meet you!"]);

// const boundLogin = login.bind(userOne);
// boundLogin("Hi", "Nice to meet you");

// userOne.login.call(userTwo)
