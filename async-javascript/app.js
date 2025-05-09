// Lecture: Understanding Asynchronous JavaScript with XMLHttpRequest

/*
==============================
Introduction to Asynchronous JavaScript
==============================

JavaScript runs code line by line (synchronously), but it also supports asynchronous operations 
like HTTP requests, timers, and file reading — which allow some tasks to run in the background 
without blocking the main thread.

This is important for:
- Making HTTP requests (like fetching data from a server)
- Waiting for events (like user input or timers)
- Improving performance and responsiveness of web applications

Common async tools in JavaScript:
- setTimeout / setInterval
- XMLHttpRequest (old way)
- fetch API (modern way)
- Promises and async/await
*/

// ------------------------------
// XMLHttpRequest Example
// ------------------------------

// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

/*
readyState values:
0 → UNSENT: request created but not opened yet
1 → OPENED: open() has been called
2 → HEADERS_RECEIVED: send() has been called
3 → LOADING: response is being downloaded
4 → DONE: response fully received
*/

// Track the progress of the request
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    // Request completed successfully
    console.log("Data received:");
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    // Request completed but failed
    console.log("Could not find the resource.");
  }
});

// Initialize the request (GET request to JSON placeholder API)
request.open("GET", "https://jsonplaceholder.typicode.com/todos");

// Send the request
request.send();


// ------------------------------
// Demonstrating Asynchronous Behavior
// ------------------------------

/*
Even though the request takes time, JavaScript doesn't wait.
It continues executing the code below while waiting for the response.
*/

console.log(1);
console.log(2);

setTimeout(() => {
  console.log("Callback from setTimeout fired after 3 seconds");
}, 3000);

console.log(3);
console.log(4);

/*
Expected Output Order:
1
2
3
4
Callback from setTimeout fired after 3 seconds
Data received: ... (once the request is complete)
*/
