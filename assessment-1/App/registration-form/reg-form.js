function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;    
    var userProfile = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    window.location.href = "./profile-page/profile.html";
});