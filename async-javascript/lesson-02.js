// ================================
// ASYNCHRONOUS JAVASCRIPT BASICS
// ================================

// In JavaScript, asynchronous programming allows tasks to run in the background
// (like fetching data from an API) without blocking the main thread.

// =====================================================
// 1. CALLBACKS USING XMLHttpRequest (Old Way)
// =====================================================

// A callback is a function passed into another function to be called later, after an async operation finishes.

const getTodosCallback = (url, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(undefined, data);
    } else if (xhr.readyState === 4) {
      callback("Could not fetch the data", undefined);
    }
  });

  xhr.open("GET", url);
  xhr.send();
};

// Example: Nested callbacks (callback hell)
getTodosCallback("https://dummyjson.com/todos/1", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Callback 1:", data);
    getTodosCallback("https://dummyjson.com/todos/2", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Callback 2:", data);
        getTodosCallback("https://dummyjson.com/todos/3", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Callback 3:", data);
          }
        });
      }
    });
  }
});

// =====================================================
// 2. BASIC PROMISE EXAMPLE
// =====================================================

const doSomething = () => {
  return new Promise((resolve, reject) => {
    // Simulate success or failure
    // resolve("Promise resolved");
    reject("Promise rejected");
  });
};

// Handling success and failure with `.then()` and `.catch()`
doSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Alternative syntax: handling both success and failure in one `.then()`
doSomething().then(
  (data) => {
    console.log("Success:", data);
  },
  (err) => {
    console.log("Failure:", err);
  }
);

// =====================================================
// 3. PROMISES WITH XMLHttpRequest (Modern Approach)
// =====================================================

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

const getTodosPromise = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data);
      } else if (xhr.readyState === 4) {
        reject("Could not fetch the resource");
      }
    });

    xhr.open("GET", url);
    xhr.send();
  });
};

// Example: Using `.then()` to handle promise chain, and `.catch()` for error
getTodosPromise("https://dummyjson.com/todos/1")
  .then((data) => {
    console.log("Promise 1:", data);
    return getTodosPromise("https://dummyjson.com/todoss/2"); // incorrect URL to show error handling
  })
  .then((data) => {
    console.log("Promise 2:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
