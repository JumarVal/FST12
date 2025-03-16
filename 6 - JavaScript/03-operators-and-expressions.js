// Operators and Expressions

// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % num2);

// Order of Operations
// PEMDAS or BODMAS
let answer = 3 + (4 * (5 -2) ** 2) / 2;
// 3 + (4 * 3 ** 2) / 2
// 3 + (4 * 9) / 2
// 3 + 36 / 2
// 3 + 18
// 21
console.log("Answer:", answer);

// String expressions or concatenation
let greeting = "Hi";
let firstName = "John";
console.log(greeting + " " + firstName + "!");

// Comparison operator
// Type coercion: convert the data type if necessary to perform the operation

// Equal to ( == )
console.log("Equal to (==):", num1 == num2);
console.log("Equal to (==):", num1 == 10);
console.log("Equal to (==):", num1 == "10");

console.log("Equal to (==):", num1 != num2);
console.log("Not equal to (!=):", num1 != 10);
console.log("Not equal to (!=):", num1 != "10");

console.log("Strict Equal to (===):", num1 === num2);
console.log("Strict Equal to (===):", num1 === 10);
console.log("Strict Equal to (===):", num1 === "10");

console.log("Strict Not Equal to (!==):", num1 !== num2);
console.log("Strict Not Equal to (!==):", num1 !== 10);
console.log("Strict Not Equal to (!==):", num1 !== "10");

console.log("Greater Than (>):", num1 > num2);
console.log("Less Than (<):", num2 < num1);
console.log("Greater Than or Equal to (>=):", num1 > num2);
console.log("Less Than or Equal to (<=):", num2 < num1);

// Logical Operator
// AND - &&
// NOT - !
// OR - ||

let sunny = true;
let warm = true;
// AND: true if all conditions are met
console.log("Is it sunny AND warm?", sunny && warm);
// OR: true if atleast one condition is met, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);




// NOT: invert the value of a boolean
console.log("NOT sunny:", !sunny);

// Addition Assignment (+=)
// num3 = num3 + num4;
// Computation: 10 + 5 = 15
num3 += num4;
console.log("The new value of num3:", num3);
// Subtraction Assignment (-=)
// Computation: 15 - 5 = 10
num3 -= num4;
console.log("The new value of num3:", num3);

// Multiplication Assignment (*=)
// Computation: 10 * 5 = 50
num3 *= num4;
console.log("The new value of num3:", num3);
// Division Assignment (/=)
// Computation: 50 / 5 = 10
num3 /= num4;
console.log("The new value of num3:", num3);