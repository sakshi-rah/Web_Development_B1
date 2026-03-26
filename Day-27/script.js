//getElementById()
// let x = document.getElementById("dom").innerText = "hello";
// console.log(x)

//getElementsByClassName()

// document.getElementsByClassName("demo").innerText = "xcgh" // This type of class selector don't work
// let a = document.getElementsByClassName("demo");
// a[1].innerText = "Bye Bye Students";

//getElementsByTagName()
// let b = document.getElementsByTagName("span");
// b[1].innerText = "Update Span Tag";

// let c = document.getElementsByTagName("p");
// c[0].innerText = "Updated Para";

//querySelector(): only first selector is change
// document.querySelector(".text").innerText = "Changed Text";
// document.querySelector("#p2").innerText = "Change id "

//querySelectorAll(): All Matching selector are change
// let y = document.querySelectorAll("p");
// y[1].innerText = "Normal Evening!";

// innerHTML VS innerText

// document.getElementById("p1").innerText = " <b> I am innerText </b>";
// document.getElementById("p2").innerHTML = "<h1> I am innerHTML</h1>"

//style
// document.getElementById("colorText").style.color = "red";
// document.getElementById("colorText").style.fontSize = "30px";
// document.getElementById("colorText").style.background = "yellow";

// createElement(): all html tags are used
// let newPara = document.createElement("p");
// newPara.innerText = "This is New Paragragh!";
// document.getElementById("container").appendChild(newPara);

//appendChild()
let li = document.createElement("li");
li.innerText = "Apple";

document.getElementById("list").appendChild(li);