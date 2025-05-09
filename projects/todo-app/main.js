const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

let editIndex = null;

// addForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const text = e.target.add.value.trim();

//   if (editIndex !== null) {
//     list.children[editIndex].querySelector("span").textContent = text;
//     editIndex = null;
//   } else {
//     list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
//   <span>${text}</span>
//   <div>
//     <i class="fas fa-edit edit"></i>
//     <i class="far fa-trash-alt delete"></i>
//   </div>
// </li>`;
//   }

//   addForm.reset();
// });
// console.log(list);

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = e.target.add.value.trim();
  console.log(editIndex);

  if (editIndex !== null) {
    list.children[editIndex].querySelector("span").textContent = text;
    console.log();
  } else {
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${text}</span>
        <div>
          <i class="fas fa-edit edit"></i>
          <i class="far fa-trash-alt delete"></i>
        </div>
      </li>`;
  }

  addForm.reset();
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains("edit")) {
    const li = e.target.parentElement.parentElement;
    const text = li.querySelector("span").textContent;

    console.log(text);

    console.log();

    addForm.add.value = text;

    editIndex = Array.from(list.children).indexOf(li);

    console.log(editIndex);
  }

  // if (e.target.classList.contains("delete")) {
  //   e.target.parentElement.parentElement.remove();
  // }

  // if (e.target.classList.contains("edit")) {
  //   const li = e.target.parentElement.parentElement;
  //   const text = li.querySelector("span").textContent;

  //   addForm.add.value = text;

  //   editIndex = Array.from(list.children).indexOf(li);

  //   // for (let i = 0; i < list.children.length; i++) {
  //   //   if (list.children[i] === li) {
  //   //     editIndex = i;
  //   //   }
  //   // }
  //   // console.log(list.children)
  //   // console.log(li)
  //   // console.log(text)
  // }
});

function filterTodos(searchText) {
  for (let i = 0; i < list.children.length; i++) {
    const li = list.children[i];
    if (!li.textContent.includes(searchText)) {
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
}

search.addEventListener("keyup", function (e) {
  const searchText = e.target.value.trim();
  filterTodos(searchText);
});

// const addForm = document.querySelector(".add");
// const search = document.querySelector(".search input");
// const list = document.querySelector(".todos");
// const item = document.querySelector("li");

// addForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const text = e.target.add.value;

//   list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
//           <span>${text}</span>
//           <i class="far fa-trash-alt delete"></i>
//         </li>`;

//   addForm.reset();
// });

// list.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }

//   if (e.target.classList.contains("edit")) {
//     const li = e.target.parentElement.parentElement;
//     const todoItems = list.querySelectorAll("li");
//     const text = li.querySelector("span").textContent;

//     // Set the main input field value to the todo's text for editing
//     addForm.add.value = text;

//     // Set the editIndex to the index of the clicked todo
//     editIndex = Array.from(todoItems).indexOf(li);
//   }
// });

// function filterTodos(searchText) {
//   for (let i = 0; i < list.children.length; i++) {
//     const li = list.children[i];
//     if (!li.textContent.includes(searchText)) {
//       li.classList.add("filtered");
//     } else {
//       li.classList.remove("filtered");
//     }
//   }
// }

// search.addEventListener("keyup", function (e) {
//   const searchText = e.target.value;
//   filterTodos(searchText);
// });
