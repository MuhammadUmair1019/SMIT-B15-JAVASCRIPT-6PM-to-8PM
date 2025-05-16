// ------------------------------------------------------------
// JavaScript: Object-Oriented Programming (OOP)
// ------------------------------------------------------------

/**
 * 🧱 Class in JavaScript
 *
 * A class is a blueprint for creating objects with shared structure and behavior.
 * In this example, the `User` class defines properties (username, email)
 * and methods (login, logout) that each user will have.
 */

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} has logged in`);
  }

  logout() {
    console.log(`${this.username} has logged out`);
  }
}

// 👥 Creating objects (instances) using the class blueprint
const userOne = new User("ali", "ali@gmail.com");
const userTwo = new User("ahmed", "ahmed@gmail.com");

console.log(userOne); // Output: User { username: 'ali', email: 'ali@gmail.com' }
userOne.login(); // Output: ali has logged in
userOne.logout(); // Output: ali has logged out

console.log(userTwo); // Output: User { username: 'ahmed', email: 'ahmed@gmail.com' }
userTwo.login(); // Output: ahmed has logged in

// ------------------------------------------------------------
// 🚗 Car Analogy for Understanding Classes & Objects
// ------------------------------------------------------------

/**
 * 🧱 Step 1: Define the Class (Blueprint)
 *
 * A class is like a car design made by engineers.
 * It defines structure (brand, color) and behavior (drive).
 */

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

/**
 * 🚘 Step 2: Create Objects (Real Cars)
 *
 * These objects are actual usable instances built using the class blueprint.
 */

const car1 = new Car("Toyota", "Red");
const car2 = new Car("Honda", "Blue");

car1.drive(); // Output: Toyota is driving
car2.drive(); // Output: Honda is driving

// 🎯 Takeaway:
// - Use classes to avoid code duplication.
// - Classes help organize code, especially when working with many similar objects.

// ------------------------------------------------------------
// 🔙 Before Classes: Object Literals
//
// This is how we defined multiple similar objects before classes.
// The drawback is repetition — each object redefines the same methods.
/*
  const userOne = {
    username: "ali",
    email: "ali@gmail.com",
    login() {
      console.log(`${this.username} has logged in`);
    },
    logout() {
      console.log(`${this.username} has logged out`);
    }
  };
  
  const userTwo = {
    username: "ahmed",
    email: "ahmed@gmail.com",
    login() {
      console.log(`${this.username} has logged in`);
    },
    logout() {
      console.log(`${this.username} has logged out`);
    }
  };
  */
