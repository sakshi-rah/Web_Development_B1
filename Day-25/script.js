// Array Methods - forEach(), Map(), Filter(), Find(), Reduce(), Splice()

// forEach()
const numbers = [10,20,30,40,50];
// for(let i = 1; i<=numbers.length; i++){
//     console.log(i);
// }
// arrayName.arrayMethodName(arrow function [(parameter)=>{console.log()}])
// numbers.forEach((n)=> {
//     console.log(n)
// });

// let nums = [1,4,6];
// const forResult = nums.forEach((a)=>{
//     return a*2; // 2, 8, 12
// })

// //Map()
// const mapResult = nums.map((b)=>{
//     return b*b; // 1, 16, 36
// })

// console.log({forResult});
// console.log({mapResult});

// Filter()
// const marks = [60, 85, 95, 56, 40]; // find even numbers
// // const even = marks.filter((m)=> m%2 === 1 ) // 85, 95
// // console.log(even);

// const pass = marks.filter((p)=> p >= 60);
// console.log(pass); // 60 85 95

//Find()
// let age = [19, 25, 18, 20, 16];
// // const result = age.find((a)=> a>18);
// // console.log(result);  // 19

// const evenNum = age.find((a)=> a%2===0);
// console.log(evenNum); // 18

// Reduce() // acc = accumulator, curr = current value
//Syntax: array.reduce((acc, curr)=>{
// return acc+curr;}, 
// initialValue);
let rollNum = [5, 4, 2, 3, 6, 7];

let sum = rollNum.reduce((acc, curr)=>{
    return acc+curr}, 0) // 0+5 = 5+4 = 9
console.log(sum);

let multy = rollNum.reduce((acc, curr)=>{
    return acc*curr}, 1) // 0+5 = 5+4 = 9
console.log(multy);

let max = rollNum.reduce((acc, curr)=> curr > acc ? curr : acc);
console.log(max); // 7

//Splice() -is used to add, remove and replace elements in array
let nums = [1, 2, 3, 4];

nums.splice(1, 1, 12); // (index=add, how many element remove, replace element value)
console.log(nums); // 1, 12, 3, 4

nums.splice(2, 2); // (index-2, remove 2 items) // 
console.log(nums); // 1, 12

nums.splice(1, 0, 7, 9); // (index, remove, add elements)
console.log(nums); // 1, 7, 9, 12

// Reverse()
nums.reverse();
console.log(nums); // 12, 9, 7, 1
