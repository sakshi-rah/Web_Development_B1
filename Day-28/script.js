//Events
/*
- click: Mouse click
- submit: Form submission
- input: Input field typing
- change: Dropdown or checkbox change
- keydown: Keyboard press
- load: Page fully loaded
- pause: Media pause
- mouseover and mouseout
 */

// 1) click
// document.getElementById("btn").addEventListener("click", function(){
//     alert("Button Clicked!");
// })

//2) submit
// document.getElementById("myForm").addEventListener("submit", function(e){
//     e.preventDefault();
//     alert("Submit Successfully");
// })

// 3) input
// document.getElementById("name").addEventListener("input", function(){
//     console.log("User Name:", this.value);
// });

// 4) change
// document.getElementById("course").addEventListener("change", function(){
//     alert("Selected: "+ this.value);
// });

// 5) keydown
// document.getElementById("key").addEventListener("keydown", function(e){
// console.log("key Pressed: "+ e.key);
// })

// 6) load
// window.addEventListener("load", function(){
//     alert("Page Loaded"); 
// })

// 7) pause
// document.getElementById("video").addEventListener("pause", function(){
//     alert("video pause");
// })

// 8) mouseover and mouseout
let box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.background = "green";
});

box.addEventListener("mouseout", function () {
    box.style.background = "red";
});

