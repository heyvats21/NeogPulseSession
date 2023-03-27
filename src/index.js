// ******************************************Question 1:******************************************************
// Write an ES6 function combineObjects with the least amount of characters which merges two
// objects into one.

// Example object:
// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// console.log(mergeObjects(obj1, obj2));

// ******************************************Question 2:******************************************************

// Write a function that takes a number as input and determines if it is a multiple of 3.
// Return the statement as written in the output.

// Output looks like this:
// console.log(isMultipleOfThree(5)) // 5 is not a multiple of 3
// console.log(isMultipleOfThree(9)) // 9 is a multiple of 3

// const isMultipleOfThree=(num)=>num%3===0?`${num} is multiple of 3`:`${num} is not multiple of 3`

// console.log(isMultipleOfThree(5))
// console.log(isMultipleOfThree(9))

// ************************************************BONUS QUESTION:*******************************************
// Create a function changeSize that takes an object product and a string newSize as parameters, and changes the size property of the product object to the newSize. Log the product object to the console before and after calling the function.

// const product = { name: 'T-Shirt', size: 'M', price: 500, color: 'Blue' }
// const changeSize=(product,newSize)=>{
//     product.size=newSize
// }
// console.log(product)
// changeSize(product,"L")
// console.log(product)

// const changeSize = (product, newSize) => {
//     const updatedProduct = { ...product, size: newSize };
//     return updatedProduct;
//   };

// console.log(product);
// const updatedProduct = changeSize(product, 'L');
// console.log(updatedProduct);
// console.log(product);

// const product={name:"T Shirt",size:"M",price:500}
// const changeSizeSpread=(product,newSize)=>{
//     obj={...product,size:newSize}
//     return obj
// }

// console.log(product)
// changeSizeSpread(product,"XXL")
// console.log(changeSizeSpread)
