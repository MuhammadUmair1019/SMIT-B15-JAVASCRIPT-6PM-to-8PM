let product1 = {
  id: 101,
  title: "Mobile",
  quantity: 20,
  color: "red",
};

let { id, title, ...rest } = product1;
console.log(id);
console.log(rest);

// let { title, quantity, stock = 3 } = product1;
// // let {title, quantity: stock } = product1;

// console.log(title);
// console.log(quantity); // ?? error // 20
// console.log(stock); // ?? 20 // 20

// console.log(product1.title)
// console.log(product1.quantity)

// inject
// let product2 = { ...product1, id: product1.id + 1, stock: 0 };
// product2.stock = 0;

// override
// let product2 = { ...product1, id: product1.id + 1 };
// product2.id = 102

// console.log(product1);
// console.log(product2);

// let product2 = {...product1}
// product2.id = 102

// console.log(product1)
// console.log(product2)

// let arr1 = [2, 3, 4]
// let arr2 = [...arr1]

// arr2[0] = 20;
// console.log(arr1)
// console.log(arr2)

// let arr1 = [2, 3, 4]
// let arr2 = [arr1[0], arr1[1], arr1[2]]

// arr2[0] = 20;
// console.log(arr1)
// console.log(arr2)

// let obj1 = {id: 101, name: 'ahmed'}
// let obj2 = obj1
// obj2.name = 'ali'
// console.log(obj1)
// console.log(obj2)
