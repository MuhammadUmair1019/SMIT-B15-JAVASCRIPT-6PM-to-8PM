// -----------------------------------------------
// JavaScript: Working with localStorage
// -----------------------------------------------

/**
 * Topic: Storing Data in localStorage
 *
 * localStorage is a Web API that allows you to store key-value pairs in the browser.
 * The data persists even after the browser is closed or refreshed.
 * Only strings can be stored, so objects must be serialized using JSON.
 */

// Storing primitive data types (strings)
localStorage.setItem("name", "Ahmed");
localStorage.setItem("age", "20"); // Note: although "20" looks like a number, it is stored as a string

/**
 * Topic: Retrieving Data from localStorage
 *
 * You can use getItem() to retrieve values using their keys.
 * If the key doesn't exist, it returns null.
 */

let item = localStorage.getItem("a"); // Key "a" doesn't exist
console.log("Item with key 'a':", item); // Output: null

/**
 * Topic: Storing Objects in localStorage
 *
 * Since localStorage only stores strings, we must convert objects into JSON strings using JSON.stringify().
 * When retrieving, we use JSON.parse() to convert the string back into an object.
 */

const user = {
  username: "ali",
  email: "ali@gmail.com",
};

localStorage.setItem("user", JSON.stringify(user)); // storing object as a JSON string

// To retrieve and parse the stored object later:
// const storedUser = JSON.parse(localStorage.getItem("user"));

/**
 * Topic: Removing Data from localStorage
 *
 * Use removeItem() to delete a specific item by key.
 * Use clear() to remove all key-value pairs from localStorage.
 */

localStorage.removeItem("name"); // removes the item with key 'name'
localStorage.clear(); // clears the entire localStorage
