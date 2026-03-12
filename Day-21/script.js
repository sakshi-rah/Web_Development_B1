//1. Arithmetic Operator:

// let a = 50;
// let b = 30;
// let sum = a+b;
// console.log("Addition: ", sum);
// console.log("Addition: ", a+2+b);
// console.log("Sub: ", a-b);
// console.log("Multification: ", a*b);
// console.log("Mod: ", a % b);

// let y = 5;
// console.log("Y: ", y++);
// console.log(y);

// let x = ++y; // pre-inc = first inc and print value
// // let x = y++; // post-inc = original value print then inc and stored in memory.
// console.log("Y1: ", x);
// console.log("Y2: ", y);

//2. Comparison Operators: Used to compare values.
    let x = 30;
    let y = "40";

    console.log(x==y);
    console.log(x===y);
    console.log(x!=y);
    // document.write(x>y);
    console.log("x > y: ", x>y); // (30>40 = f)
    console.log("x <= y: ", x<=y); // (30<40 = t)

// 3. Logical Operators: Used to combine conditions.
let age = 19;
let hasId = true;

if(age >= 18 && hasId){ // 1 1 = 1
console.log("Eligible");
}else{
    console.log("Not Eligible")
}

let a = 8;
let b = 10;

if(a>b || a==b){ // 1 0 = 1
    console.log("Condition is true");
}

console.log(!(a>b));

// 4. Conditional Statements:
let num = 20;

if(num >= 20){
    console.log("You Can Go for Exam!");
}else{
    console.log("You can't Go for Exam!");
}

// else if

// let z = 2;
// let z = 0;
let z = -6;

if(z>0){ // t , f, f
    console.log("Positive Number"); // print
}else if(z==0){ // 0==0 => t, -6==0 => f
    console.log("Zero"); // print
}else{
    console.log("Negative Number"); // print
}

//5. Ternary Operator: ?:
let age1 = 20;
let text = (age1 < 18)? "Minor" : "Adult";
console.log(text);
