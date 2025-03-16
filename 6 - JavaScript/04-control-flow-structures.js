// Control Flow Structures

// 1. Conditional Statements: execute a code block if a condition is met.
// if, else if, else statements
// Code Block - {}
// conditional block - ()
let temperature = -2;

if (temperature < 0){
    console.log("It's freezing.");
    console.log("Prepare a hot chocolate.");
} else if (temperature >= 0 && temperature < 20){
    // Range: 0-19
    console.log("It's cool outside.");
}else {
    console.log("It's Hot outside.");
}

// 2. Looping Statesments: repeatedly execute a block of code

// for loop
/*
Components of a for loop:
1. Variable Initialization
2. Condition Expression
3. Increment / Decrement
*/
for(let i = 1; i < 3; i++){
    console.log("For Loop Count:", i);
}

// While Loop
let count = i;
while(count <= 3){
    console.log("While Loop Count:", count);
    count++;
}