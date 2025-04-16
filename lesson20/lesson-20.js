const form = document.querySelector("form");

// const username = document.querySelector("#username")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = form.username.value;
  let pattern = /^[a-zA-Z0-9]{4,10}$/;

  if (pattern.test(username)) {
    console.log("valid username");
  } else {
    document.querySelector("small").textContent = "not valid username";
  }

//   form.username.value = ""

  form.reset()

  // console.log(username.value)
  console.log("submit");
});

// let username = 'ahmed@'
// let pattern = /^[a-zA-Z0-9]{4,10}$/

// console.log(pattern.test(username))
