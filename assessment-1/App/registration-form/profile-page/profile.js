document.addEventListener("DOMContentLoaded", function () {
    displayProfile();
});
function displayProfile() {
    var profileData = JSON.parse(localStorage.getItem("userProfile"));
    if (profileData) {
        var profileInfoUl = document.getElementById("profile-info");
        profileInfoUl.innerHTML = `
 <li><strong>First Name:</strong> ${profileData.firstName}</li>
 <li><strong>Last Name:</strong> ${profileData.lastName}</li>
 <li><strong>DOB:</strong> ${profileData.dob}</li>
 <li><strong>Gender:</strong> ${profileData.gender}</li>
        `;
    } else {
        alert("Profile data not found in local storage.");
    }
}