// -----------------------------------------------
// JavaScript: Fetch API, Async/Await, and Error Handling
// -----------------------------------------------

/**
 * Topic: Fetch API
 * 
 * The Fetch API is a modern interface that allows you to make HTTP requests to servers.
 * It returns Promises and replaces older methods like XMLHttpRequest.
 * 
 * Example below shows how to use Fetch with Promises (then/catch syntax).
 */

fetch("https://dummyjson.com/todos/1")
  .then((response) => {
    return response.json(); // parsing the JSON body from the response
  })
  .then((data) => {
    console.log("data", data); // logging the first todo item

    // Making a second fetch request after the first completes
    return fetch("https://dummyjson.com/todos/2");
  })
  .then((res) => res.json()) // parsing the second response
  .then((d) => console.log("d", d)) // logging the second todo
  .catch((err) => console.log("err", err)); // handling any errors in the chain

// -----------------------------------------------

/**
 * Topic: Async/Await
 * 
 * Async/await is a cleaner syntax to work with Promises in an asynchronous function.
 * It makes the code look synchronous and is easier to read.
 */

const getTodos = async () => {
  try {
    const res1 = await fetch("https://dummyjson.com/todos/1");
    const result1 = await res1.json();
    console.log("Todo 1:", result1);

    const res2 = await fetch("https://dummyjson.com/todos/2");
    const result2 = await res2.json();
    console.log("Todo 2:", result2);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

getTodos();

// -----------------------------------------------

/**
 * Topic: Throwing and Catching Errors
 * 
 * Sometimes a fetch request may succeed (status 200), or it may fail (e.g., 404 or 500).
 * We can manually check the HTTP response status and throw an error accordingly.
 */

fetch("https://dummyjson.com/todoss/1") // incorrect endpoint to simulate an error
  .then((response) => {
    console.log("Raw response:", response);

    if (response.status !== 200) {
      // Throwing a custom error if status is not OK
      throw new Error("Response not OK. Status Code: " + response.status);
    }

    return response.json();
  })
  .then((data) => console.log("data", data))
  .catch((err) => console.log("Caught Error:", err.message));
