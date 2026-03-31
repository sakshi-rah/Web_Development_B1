//Signup Form Validation

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){
    e.preventDefault(); //stop form submit

    //get value
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //error fields
    const userError = document.getElementById("userError"); // sakshirah
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");

    //clear odd errors
    userError.textContent = " ";
    emailError.textContent = " ";
    passError.textContent = " ";

    let isValid = true;

    // username validation
    if(username === ""){
        userError.textContent = "Username is Required!";
        userError.style.color = "red";
        isValid = false;
    }

    // email validation
    if(!email.includes("@")){
        emailError.textContent = "Enter Valid Email!";
        emailError.style.color = "red";
        isValid = false;
    }

    // Password Validation
    if(password.length < 6){
        passError.textContent = "Password must be at least 6 characters!";
        passError.style.color = "red";
        isValid = false;
    }

    //success
    if(isValid){
        alert("Signup Successfully!");
    }

    console.log("Username: ", username);
    console.log("Email: ", email);
})