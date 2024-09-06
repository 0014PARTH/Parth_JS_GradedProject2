const storedUsername = "user";
const storedPassword = "password";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "resume.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});

window.onload = function() {
    if (localStorage.getItem("loggedInUser")) {
        window.location.href = "resume.html";
    }
};