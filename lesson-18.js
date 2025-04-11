const a = document.querySelector("a");
a.style.color = "red";
console.dir(a);

a.setAttribute("class", "link");
// a.setAttribute("style", "color: green;")
console.log(a.getAttributeNode("href"));
console.log(a.getAttribute("href"));

// const h1 = document.querySelector(".heading");

// h1.innerHTML += ` hello`;

// const heading = document.querySelector("div + h1")
// console.log(heading)

// const headings = document.querySelectorAll("h1")

// headings.forEach((heading) => {
//     console.log(heading)
// })

// console.log(headings)

// // get element by id
// const elementById = document.getElementById("heading")
// console.log(elementById)

// // get elements by classname
// const getHeadings = document.getElementsByClassName("heading")
// console.log(getHeadings)

// // get element by tagName
// const paras = document.getElementsByTagName("p")
// console.log(paras)

// const h1 = document.querySelector('h1')
// console.log(h1)
// console.dir(h1)
