document.addEventListener("DOMContentLoaded", function() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var submitButton = document.getElementById("submit-btn");
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");
    usernameInput.addEventListener("input", function() {
        toggleSubmitButton();
        validateUsername();
    });
    passwordInput.addEventListener("input", function() {
        toggleSubmitButton();
        validatePassword();
    });
    function toggleSubmitButton() {
        if (usernameInput.value && passwordInput.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    function validateUsername() {
        if (usernameInput.value.trim() === "") {
            usernameError.textContent = "Username cannot be empty";
        } else {
            usernameError.textContent = "";
        }
    }
    function validatePassword() {
        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Password cannot be empty";
        } else {
            passwordError.textContent = "";
        }
    }
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "../profile-page/profile.html";
    });
 });