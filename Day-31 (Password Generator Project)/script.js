//Events- onclick, onchange, onmouseover, onmouseout, onload

// onchange
// function funOnchange(){
//     console.log("Something changed!");
// }
// //onmouseover
// function funOnmouseover(){
//     document.getElementById("text").style.background = "green";
//     document.getElementById("text").style.color = "white";
// }
// //onmouseout
// function funOnmouseout(){
//     document.getElementById("text").style.background = "red";
//     document.getElementById("text").style.color = "white";
// }


// Code of Random Captcha Generator

function genCap(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQUVWXYZ0123456789";
    let password = "";
    for(let i=0; i<8; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("pass").value = password;
}