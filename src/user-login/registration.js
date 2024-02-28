import React from 'react';
import "./reg-form.css"

const validatePassword = () =>  {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
// document.getElementById("registration-form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var dob = document.getElementById("dob").value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;    
//     var userProfile = {
//         firstName: firstName,
//         lastName: lastName,
//         dob: dob,
//         gender: gender
//     };
//     localStorage.setItem("userProfile", JSON.stringify(userProfile));
//     window.location.href = "./profile.js";
// });

function Registration() {
    return (
        <div class="container">
        <h2 class="heading">Registration Form</h2>
        <form id="registration-form">
            <div class="form-group">
                <label for="name">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required/>
            </div>
            <div class="form-group">
                <label for="name">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <div class="options">
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="form-group">
                <label for="date">Date of Birth</label>
                <input type="date" id="dob"/>
            </div>
            <div class="form-group">
                <label for="role">Job Role:</label>
                <select id="role" name="role">
                    <option value="Developer">Developer</option>
                    <option value="Tester">Tester</option>
                    <option value="Recruitment Specialist">Recruitment Specialist</option>
                    <option value="Manager">Manager</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label for="subscribe">Subscribe to newsletter</label>
                <input type="checkbox" id="subscribe" name="subscribe"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div class="form-group">  
                <label for="password">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>  
              </div>  
            <div class="form-group">
                <a href="https://example.com">Terms and Conditions</a>
            </div>
            <div class="form-group">
                <button type="submit" onclick={validatePassword}>Submit</button>
            </div>
            <a href="./login.js">Already have an account? Click to login</a>
        </form>
    </div>
    );
}
export default Registration;