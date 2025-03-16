// Array and Array Methods

// Elemet: individual values inside of an array.
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
console.log("Fruits", fruits);
console.log("Fruits", fruits.length);

// Array Indexing
console.log("Fruits", fruits[0]);
console.log("Fruits", fruits[fruits.length - 1]);

// Update element/s
fruits[0] = "Avocado";
console.log("Fruits: ", fruits);

// .push(element/s): add element/s at end
fruits.push("Pineapple", "Grapes");
console.log("Fruits: ", fruits);

// .pop(): delete element at the end
fruits.pop();
console.log("Fruits: ", fruits);

// .inlcludes(): check if element exists
console.log("Is Banana included", fruits.includes("Banana"));
console.log("Is Banana included", fruits.includes("banana"));
console.log("Is Banana included", fruits.includes("Orange"));

// .forEach(): execute a funtion to each elemt of the array
fruits.forEach(function (fruit){
    console.log("Fruit: ", fruit);
});