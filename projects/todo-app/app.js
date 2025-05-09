const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

// const generateTemplate = (todo) => {
//   const html = `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${todo}</span>
//       <i class="far fa-trash-alt delete"></i>
//     </li>
//   `;
//   list.innerHTML += html;
// };

const generateTemplate = (todo) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

  const span = document.createElement('span');
  span.textContent = todo;

  const icon = document.createElement('i');
  icon.classList.add('far', 'fa-trash-alt', 'delete');

  li.appendChild(span);
  li.appendChild(icon);

  list.appendChild(li);
};

const filterTodos = (searchTerm) => {
  let filteredTodos = [];
  let visibleTodos = [];

  for (let i = 0; i < list.children.length; i++) {
    const todoItem = list.children[i];

    if (!todoItem.textContent.toLowerCase().includes(searchTerm)) {
      filteredTodos.push(todoItem);
    } else {
      visibleTodos.push(todoItem);
    }
  }

  filteredTodos.forEach((todoItem) => {
    todoItem.classList.add("filtered");
  });

  visibleTodos.forEach((todoItem) => {
    todoItem.classList.remove("filtered");
  });
};

// add todos event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos event
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter todos event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
