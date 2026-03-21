//Array in Javascript

//Creating an Array
/*syntax: const arrayName = [element1, element2, element3,.....] */

const subjects = ["HTML", "CSS", "JS", "Tailwind CSS"]; // array defined
console.log(subjects[3]);

/*subjects[0] = "HTML";
subjects[1] = "CSS";
subjects[2] = "JS";
subjects[3] = "Tailwind CSS";*/

// Accessing Array Elements
const numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers[2]);

// Access last Element of array
// arrayName[arrayName.length-1]
console.log(numbers[numbers.length-1]);

//Array Length = arrayName.length
console.log(`numbers array len: ${numbers.length}`); // 6
console.log(`subjects array len: ${subjects.length}`); // 4

// Methods of Array
// Push()- Add Element at End => syntax: arrayName.push(element);

const items = ["Laptop", "Mobile", "Charger", "Mouse"];
items.push("Keyboard", "Notepad");
console.log(items);

// Pop()- Remove Element from End => syntax: arrayName.pop();

items.pop();
console.log(items); // "Laptop", "Mobile", "Charger", "Mouse", "Keyboard"

// Slice()- Remove Slice of Array => syntax: arrayName.slice(0, 3); note: 0 to 2.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.slice(0, 2);
console.log(result);

// Unshift()-Add new items in start
fruits.unshift("Pineapple", "Lemon"); // "Pineapple", "Lemon", "Banana", "Orange", "Apple", "Mango"
console.log(fruits);

// Shift() - Remove element from start
fruits.shift();
console.log(fruits); // "Lemon","Banana", "Orange", "Apple", "Mango"

//Looping Through Arrays elements accessing
const Books = ["English", "C Lang", "Biology", "Math"];

for(let i = 0; i<Books.length; i++){
    console.log(Books[i]);
}