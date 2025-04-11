// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const body = document.body;

// event delegation

// grandparent.addEventListener("click", (e) => {
//     console.log(e.target)
//   console.log("Bubble Grandparent");
// });

// parent.addEventListener("click", () => {
//   console.log("Bubble Parent");
// });

// child.addEventListener("click", () => {
//   console.log("Bubble Child");
// });

// event capturing
// body.addEventListener("click", () => {
//     console.log('Capture body')
// }, true)

// grandparent.addEventListener("click", () => {
//     console.log('Capture Grandparent')
// }, true)

// parent.addEventListener("click", () => {
//     console.log('Capture Parent')
// }, true)

// child.addEventListener("click", () => {
//   console.log("Capture Child");
// }, true);

// event bubbling
// body.addEventListener("click", () => {
//     console.log('Bubble body')
// })

// grandparent.addEventListener("click", () => {
//     console.log('Bubble Grandparent')
// })

// parent.addEventListener("click", () => {
//     console.log('Bubble Parent')
// })

// child.addEventListener("click", () => {
//   console.log("Bubble Child");
// });

// -----------------------------------------------------
const button = document.querySelector("button");
const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");

// items[0].addEventListener("click", () => {
//     console.log(items[0])
// })

// items[1].addEventListener("click", () => {
//     console.log(items[1])
// })

ul.addEventListener("click", (e) => {
    // e.target.style.textDecoration = "line-through";
    e.target.remove()
    // console.log()
})
// items.forEach((item) => {
//     item.addEventListener("click", () => {
//       item.style.textDecoration = "line-through";
//       console.log(item.style);
//     });
//   });

button.addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = 'New todo'
  ul.append(li)

//   ul.innerHTML += `<li>New todo </li>`;
});

console.log(items);

button.onclick = function () {
    console.log('you clicked')
}

// Traversing nodes
// const list = document.getElementsByClassName("list")
// console.log(list[0].children[1].parentElement)

// const intro = document.getElementById("intro")

// console.log(intro.nextElementSibling.nextElementSibling)

// console.log(document)
