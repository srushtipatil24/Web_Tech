function ValidateForm() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // for reome previous error messages which shows in red color
    document.getElementById("userError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";

    let isValid = true;

    // Username validation
    if (username === "") {
        document.getElementById("userError").innerHTML = "Username is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
};