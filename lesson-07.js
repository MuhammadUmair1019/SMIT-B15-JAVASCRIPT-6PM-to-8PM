let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 40000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      { id: 1, user: "Ahmad", rating: 4.0, status: true },
      { id: 2, user: "Zubair", rating: 4.5, status: false },
      { id: 3, user: "Ali", rating: 5.0, status: true },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 650000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      { id: 1, user: "Ahmad", rating: 4.0, status: true },
      { id: 2, user: "Zubair", rating: 4.5, status: false },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      { id: 1, user: "Ahmad", rating: 4.0, status: true },
      { id: 2, user: "Zubair", rating: 3.0, status: false },
    ],
  },
];

// for (let j = 0; j < products.length; j++) {
//   let product = products[j];
//   let maxPrice = 0;
//   let maxVariations = null;
//   for (let i = 0; i < product.variations.length; i++) {
//     if (product.variations[i].price > maxPrice) {
//       maxPrice = product.variations[i].price;
//       maxVariations = product.variations[i];
//     }
//   }
//   // console.log(maxPrice);
//   // console.log(maxVariations);
//   // console.log(products[j].title + ' - ' + maxVariations.color + "(" + maxPrice + ")")
//   // console.log(`${products[j].title} - ${maxVariations.color} (${maxPrice})`);
// }

// console.log(product);
console.log("*****************************");

// 9. Find the Most Expensive Variation of Each Product
// console.log("Most Expensive Variation for Each Product:");
// for (let i = 0; i < products.length; i++) {
//   let maxPrice = 0;
//   let expensiveVariation = null;
//   for (let j = 0; j < products[i].variations.length; j++) {
//     if (products[i].variations[j].price > maxPrice) {
//       maxPrice = products[i].variations[j].price;
//       expensiveVariation = products[i].variations[j];
//     }
//   }
//   console.log(
//     `${products[i].title} - ${expensiveVariation.color} (${maxPrice})`
//   );
// }

// let marks = [2, 4, 20, 10, 15];

// let max = 0;

// for (let i = 0; i < marks.length; i++) {
//   if (marks[i] > max) {
//     max = marks[i];
//   }
// }

// console.log(max);

// 1. Find a Product by ID
let productId = 102;
let foundProduct = null;
for (let i = 0; i < products.length; i++) {
  if (products[i].id === productId) {
    foundProduct = products[i];
    break;
  }
}
console.log("Product Found:", foundProduct);

// 2. List All Product Titles
console.log("All Product Titles:");
for (let i = 0; i < products.length; i++) {
  console.log(products[i].title);
}

// 3. Find Available Colors of a Product
console.log("**Available Colors for Product**");
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 101) {
    for (let j = 0; j < products[i].variations.length; j++) {
      console.log(products[i].variations[j].color);
    }
  }
}

// 4. Get Total Quantity of a Product
let totalQuantity = 0;
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 101) {
    for (let j = 0; j < products[i].variations.length; j++) {
      totalQuantity += products[i].variations[j].quantity;
    }
  }
}
console.log("Total Quantity of Product 101:", totalQuantity);

// 5. Filter Products with Low Stock (at least one variation with quantity < 2)
console.log("Products with Low Stock:");
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products[i].variations.length; j++) {
    if (products[i].variations[j].quantity < 2) {
      console.log(products[i].title);
      break;
    }
  }
}

// 6. Find the Highest Rated Product
console.log("*************Highest Rated*************");
let highestRatedProduct = null;
let highestRating = 0;
for (let i = 0; i < products.length; i++) {
  let sum = 0;
  for (let j = 0; j < products[i].reviews.length; j++) {
    sum += products[i].reviews[j].rating;
  }
  let avgRating = sum / products[i].reviews.length;

  if (avgRating > highestRating) {
    highestRating = avgRating;
    highestRatedProduct = products[i];
  }
}

console.log("Highest Rated Product: " + highestRatedProduct.title);
console.log(highestRating);
console.log(highestRatedProduct);

// let highestRatedProduct = null;
// let highestRating = 0;
// for (let i = 0; i < products.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < products[i].reviews.length; j++) {
//     sum += products[i].reviews[j].rating;
//   }
//   let avgRating = sum / products[i].reviews.length;
//   if (avgRating > highestRating) {
//     highestRating = avgRating;
//     highestRatedProduct = products[i].title;
//   }
// }
// console.log("Highest Rated Product:", highestRatedProduct);

// 7. Filter Active Reviews for a Product
console.log("Active Reviews for Product 101:");
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 101) {
    for (let j = 0; j < products[i].reviews.length; j++) {
      if (products[i].reviews[j].status) {
        console.log(products[i].reviews[j]);
      }
    }
  }
}

// 8. Sort Products by Average Rating
for (let i = 0; i < products.length - 1; i++) {
  for (let j = i + 1; j < products.length; j++) {
    let sum1 = 0,
      sum2 = 0;
    for (let r = 0; r < products[i].reviews.length; r++) {
      sum1 += products[i].reviews[r].rating;
    }
    let avg1 = sum1 / products[i].reviews.length;

    for (let r = 0; r < products[j].reviews.length; r++) {
      sum2 += products[j].reviews[r].rating;
    }
    let avg2 = sum2 / products[j].reviews.length;

    if (avg1 < avg2) {
      let temp = products[i];
      products[i] = products[j];
      products[j] = temp;
    }
  }
}
console.log("Products Sorted by Rating:", products);

// 10. Calculate Total Stock Value
let totalStockValue = 0;
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products[i].variations.length; j++) {
    totalStockValue +=
      products[i].variations[j].price * products[i].variations[j].quantity;
  }
}
console.log("Total Stock Value:", totalStockValue);

// -----------------------------------------------------

// console.log("Most Expensive Variation for Each Product:");

// for (var i = 0; i < products.length; i++) {
//     var mostExpensive = products[i].variations[0]; // Start with the first variation

//     for (var j = 1; j < products[i].variations.length; j++) {
//         if (products[i].variations[j].price > mostExpensive.price) {
//             mostExpensive = products[i].variations[j];
//         }
//     }

//     console.log("Product " + products[i].id + " = " + products[i].title + " - " + mostExpensive.color + " (" + mostExpensive.price + ")");
// }

// for (let i = 0; i < products.length; i++) {
//   let product = products[i];
//   console.log("Product:", product.title); // Print product title

//   for (let j = 0; j < product.reviews.length; j++) {
//     let review = product.reviews[j];

//     if (review.status === true) {
//       console.log(JSON.stringify({
//         name: review.name,
//         rating: review.rating,
//         comment: review.comment
//       }));
//     }
//   }

//   console.log("-----"); // Just for separating products
// }

// for (var i = 0; i < products.length; i++) {
//   var product = products[i];
//   var hasLowStock = false;

//   for (var j = 0; j < product.variations.length; j++) {
//       if (product.variations[j].quantity < 2) {
//           hasLowStock = true;
//           break;
//       }
//   }

//   if (hasLowStock) {
//       console.log(product.title);
//   }
// }
