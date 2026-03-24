// Objects in JS - key value pairs
// const student = {
//     name: "Rakhi", // name = key, Rakhi = value
//     surname: "Thakre",
//     age: 20,

// };

// console.log(typeof(student));
// console.log(student.name, student.surname);


// //Adding & Updating Properties
// // Syntax: objectName.key = value
// student.city = "Nagpur";
// student.dept = "AIML";

// Object Methods
const user = {
    userName: "Anand",
    loginCount: 3,
    greet: function(){
        console.log("Hello" , this.userName);
    }
};

user.greet();

// Nested Objects

const employee = {
    id: 101,
    eName: "Sharmili",
    address: {
        city: "Nagpur",
        state: "MH",
        pin: 441100
    }
};

console.log(employee.id);
console.log(employee.address.pin);