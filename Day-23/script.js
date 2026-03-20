// Function in js
// 1) Function Declaration - with return

function addNums(a, b){
    return a+b; // 20+30 = 50 // function declaration
}

const result = addNums(20, 30); // 50 // this is a function call
console.log("Addition of a and b:", result); // printing the function values

// Function without return

function greetStudent(name){
    console.log("Good Evening", name);
}

greetStudent("Mohit");

// 2) Function Expression
/* const function name = function keyword(parameters){} */
const multiply = function(x, y){
    return x*y; // 2*50 = 100
}

// const multi = multiply(2,50); // 100
// console.log("Multiply of x & y:", multi);
console.log("Multiply of x & y:", multiply(6,30));

// 3) Arrow Function (Standard)
/* const function name = (parameters) => {function body} Note: ignore function keyword*/

const subtract = (m, n) =>{
    let sub = m-n;
    // console.log("Subtraction of m & n:", sub);
    console.log(`Subtraction of ${m} & ${n}: ${sub}!`);
}

subtract(30, 10); // 40

// Arrow Function Shortcut

const square = num => num * num ; 
console.log(`Square of num: ${square(8)}`); // 64

// Parameter and Return Flow

const calculateTotal = (price, quantity) =>{
    const total = price * quantity;
    return total;
}

const billAmount = calculateTotal(3590, 7);
console.log(`Total Bill: ${billAmount}!`);