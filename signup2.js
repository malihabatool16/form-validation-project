document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Get form inputs
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    let age = document.getElementById("age").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Reset error messages
    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    // Validation rules
    if (firstname === "") {
        document.getElementById("firstnameError").textContent = "First name is required.";
        isValid = false;
    }

    if (lastname === "") {
        document.getElementById("lastnameError").textContent = "Last name is required.";
        isValid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long, include a number and a special character.";
        isValid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if (age === "" || isNaN(age) || age < 18 || age > 100) {
        document.getElementById("ageError").textContent = "Age must be a number between 18 and 100.";
        isValid = false;
    }

    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required.";
        isValid = false;
    }

    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    }

    // If all inputs are valid, submit form (or show success message)
    if (isValid) {
        alert("Form submitted successfully!");
        // this.submit();  // Uncomment this if you want to actually submit the form
    }
});
